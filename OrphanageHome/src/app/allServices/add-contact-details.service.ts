import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddContactDetailsService {

  private baseUrl:string="https://localhost:7141/"

  constructor(private http:HttpClient) { }
  addContactInfo(touchObj:any){
    return this.http.post<any>(this.baseUrl+'api/ContactUs/ContactUs-Info',touchObj)
  }

  getContactInfo(){
    return this.http.get<any>(this.baseUrl+'api/ContactUs/getContactDetails')
  }

}