import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
private API_URL='http:localhost:3000/customers';


findAll():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.API_URL);

}
}
