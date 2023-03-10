import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {ProductDeleteComponent} from "../product/product-delete/product-delete.component";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = 'http://localhost:3000/products';


  constructor(private httpClient: HttpClient) {
  }


  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL);
  }

  saveProduct(product): Observable<Product> {
    return this.httpClient.post<Product>(this.API_URL, product);

  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL + '/' + id);

  }

  updateProduct(id: number, product: Product): Observable<Product> {

    return this.httpClient.put<Product>(this.API_URL + '/' + id, product);

  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.API_URL + '/' + id);

  }


}

