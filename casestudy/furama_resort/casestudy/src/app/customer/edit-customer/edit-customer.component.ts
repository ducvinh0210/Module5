import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../model/customerType";
import validate = WebAssembly.validate;

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerForm: FormGroup;
  id: number;
  customerTypeList: CustomerType[] = [];


  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);

    })
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(value => {


      this.customerTypeList = value;

    });
  }


  private getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customerForm = new FormGroup({

        name: new FormControl(customer.name, Validators.required),
        dateOfBirth: new FormControl(customer.dateOfBirth, Validators.required),
        gender: new FormControl(customer.gender, Validators.required),
        idCard: new FormControl(customer.idCard, Validators.required),
        phoneNumber: new FormControl(customer.phoneNumber, Validators.required),
        email: new FormControl(customer.email, Validators.required),
        customerType: new FormControl(customer.customerType, Validators.required),
        address: new FormControl(customer.address, Validators.required)
      });


    });


  }

  updateCustomer(id: number) {
    const customer = this.customerForm.value;
    this.customerService.editCustomer(id, customer).subscribe(data => {
      alert('cập nhật thành công');


    })


  }


  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
