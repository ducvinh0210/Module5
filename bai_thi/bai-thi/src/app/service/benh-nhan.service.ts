import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BenhNhan} from "../model/benhNhan";

@Injectable({
  providedIn: 'root'
})
export class BenhNhanService {

  private API_URL = 'http://localhost:8080/benhNhans';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<BenhNhan[]> {
    return this.httpClient.get<BenhNhan[]>(this.API_URL);


  }
}
