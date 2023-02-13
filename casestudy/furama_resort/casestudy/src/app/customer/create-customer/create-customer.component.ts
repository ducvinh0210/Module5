import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../model/customerType";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {Router} from "@angular/router";
import validate = WebAssembly.validate;

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', [Validators.required, this.checkMinAge18AndMaxAge80]),
    gender: new FormControl('', Validators.required),
    idCard: new FormControl('', [Validators.required,Validators.pattern('^\\d{9}$|^\\d{12}$')]),
    phoneNumber: new FormControl('', [Validators.required,Validators.pattern('(0|[(]84[)][+])9[01]\\d{7}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    customerType: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)


  });
  customerTypeList: CustomerType[] = []

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(value => {
      this.customerTypeList = value;

    });
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer).subscribe(() => {
      this.customerForm.reset();
      this.router.navigateByUrl('customers');
    }, error => {console.log("tao moi khong thanh cong ");});

  }


  checkMinAge18AndMaxAge80(abstractControl: AbstractControl): any {
    const formYear = new Date(abstractControl.value).getFullYear();
    const curYear = new Date().getFullYear();

    return (curYear - formYear >= 18 && curYear - formYear <= 80) ? null : {invalid18_80: true};
  }




}
