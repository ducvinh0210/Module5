import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BenhAn} from "../model/benhAn";

@Injectable({
  providedIn: 'root'
})
export class BenhAnService {

  constructor(private httpClient: HttpClient) {
  }

  // private API_URL = "http://localhost:3000/benhAns";


private API_URL="http://localhost:8080/benhAns"
  findAll(): Observable<BenhAn[]> {
    return this.httpClient.get<BenhAn[]>(this.API_URL);

  }

  findById(id:number):Observable<BenhAn>{
    return this.httpClient.get<BenhAn>(this.API_URL+'/'+id);

  }
  deleteBenhAn(id:number):Observable<BenhAn>{
    return this.httpClient.delete<BenhAn>("http://localhost:8080/benhAns"+'/'+id);




  }
  editBenhAn(id:number, benhAn : BenhAn): Observable<BenhAn>{
    return this.httpClient.put<BenhAn>(this.API_URL+'/'+id,benhAn);


  }
  createBenhAn(benhAn):Observable<BenhAn>{
    return this.httpClient.post<BenhAn>(this.API_URL,benhAn);
  }




  getAllBenhAn(page:number):Observable<any>{
    return this.httpClient.get<any>(this.API_URL + '?page=' + page)
  }





}
