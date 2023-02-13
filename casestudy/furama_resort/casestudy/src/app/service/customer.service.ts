import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  private API_URL = "http://localhost:3000/customers";

  private API="http://localhost:3000/";



  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL);

  }

  saveCustomer(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API_URL, customer);

  }

  findById(id : number): Observable<Customer>{
return this.httpClient.get<Customer>(this.API_URL +'/'+id);
  }

  deleteCustomer(id: number): Observable<Customer>{
    return this.httpClient.delete<Customer>(this.API_URL+'/'+id);

  }

  getAll(name:string , address: string , customerType :string ):Observable<Customer[]>{
    return this.httpClient.get<Customer[]>('http://localhost:3000/customers?name_like='+ name + '&address_like=' +address+ '&customerType.name_like='+customerType);

  }
  editCustomer(id: number, customer: Customer): Observable<Customer>{
  return   this.httpClient.put<Customer>(this.API_URL+'/'+id,customer);

  }




}
