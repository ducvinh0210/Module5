import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BenhAn} from "../model/benhAn";
import {environment} from "../../environments/environment";




@Injectable({
  providedIn: 'root'
})
export class BenhAnService {

  constructor(private httpClient: HttpClient) {
  }

  // private API_URL = "http://localhost:3000/benhAns";


private API_URL="http://localhost:8080"
  findAll(): Observable<BenhAn[]> {
    return this.httpClient.get<BenhAn[]>(this.API_URL+'/benhAns');

  }

  // findAllBenhAn(curPage: number, numberRecord: number):Observable<DataResult<BenhAn>>{
  //   return this.httpClient.get<DataResult<BenhAn>>(this.API_URL)
  // }

  findById(id:number):Observable<BenhAn>{
    return this.httpClient.get<BenhAn>(this.API_URL+'/benhAns'+'/'+id);

  }
  deleteBenhAn(id:number):Observable<BenhAn>{
    return this.httpClient.delete<BenhAn>(this.API_URL+'/benhAns/delete'+'/'+id);




  }
  editBenhAn(id:number, benhAn : BenhAn): Observable<BenhAn>{
    return this.httpClient.put<BenhAn>(this.API_URL+'/benhAns/edit'+'/'+id,benhAn);


  }
  createBenhAn(benhAn):Observable<BenhAn>{
    return this.httpClient.post<BenhAn>(this.API_URL+'/benhAns/add',benhAn);
  }




  getAllBenhAn(page:number):Observable<any>{
    return this.httpClient.get<any>(this.API_URL + '?page=' + page)
  }





}
