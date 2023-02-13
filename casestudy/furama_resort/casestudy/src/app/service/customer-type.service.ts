import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../model/customerType";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  private API_URL = 'http://localhost:3000/customerTypes';

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<CustomerType[]>{
    return this.httpClient.get<CustomerType[]>(this.API_URL);


  }
}
