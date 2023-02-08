import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers:Customer[]=[

    {
      id: 1,
      name: 'Duc Vinh',
      dateOfBirth: '22/11/2000',
      gender: 1,
      idCard: '12345',
      phoneNumber: '123444444',
      email: 'vinh@gmail.com',
      customerType: 'Diamond',
      address: 'Quang Nam'
    },
    {
      id: 2,
      name: 'Pham Thi Vi',
      dateOfBirth: '02/10/1998',
      gender: 0,
      idCard: '12344454',
      phoneNumber: '028237373',
      email: 'vithipham@gmail.com',
      customerType: 'Diamond',
      address: 'Quang Nam'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
