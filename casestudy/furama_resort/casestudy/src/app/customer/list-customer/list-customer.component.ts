import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";
import {CustomerType} from "../../model/customerType";
import {CustomerTypeService} from "../../service/customer-type.service";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  p: number=1;

name='';
email='';
customerType='';

  customerNameDelete: string;
  customerIdDelete: number;


  customers: Customer[] = [];

  customerTypeList: CustomerType[]=[];


  constructor(private  customerService: CustomerService,
             private customerTypeService: CustomerTypeService,
             private router:Router) {
  }

  ngOnInit(): void {

    // this.customerService.findAll().subscribe(value => {
    //   this.customers = value;
    //   console.log(value)
    // })

    this.getAll(this.name, this.email, this.customerType);


    this.customerTypeService.getAll().subscribe(value => {

      this.customerTypeList = value;

    });

  }


  getInfoCustomerDelete(name: string, id: number) {
    this.customerNameDelete = name;
    this.customerIdDelete = id;

  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customerIdDelete).subscribe(()=>{
this.router.navigateByUrl('customers');


    })
  }

  getAll(name:string , address: string , customerType: string){
    this.customerService.getAll(name, address, customerType).subscribe(customer =>
    {
      this.customers=customer;

    })
  }

}
