import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string="https://localhost:7141/"

  constructor(private http:HttpClient) { }
  loginAdmin(loginObj:any){
    return this.http.post<any>(this.baseUrl+'api/Login/authenticate',loginObj)
  }


  // login(loginObj: any){
  //   return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj)
  // }
}
