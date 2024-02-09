import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SponserDetailsService {

  

  private baseUrl:string="https://localhost:7141/"

  constructor(private http:HttpClient) { }
 
  getSponserInfo(){
    return this.http.get<any>(this.baseUrl+'api/Sponsers/post-sponserDetails')
  }

  getJoinedInfo(){
    return this.http.get<any>(this.baseUrl+'api/Sponsers/sponsers-child-details')
  }
  getSponserChildInfo(sponserName:string){
    console.log(sponserName)
    return this.http.get<any>(this.baseUrl+'api/Sponsers/child-details/'+sponserName)

  }
}
