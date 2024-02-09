import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChildrenDetailsService {

 
  private baseUrl:string="https://localhost:7141/"

  constructor(private http:HttpClient) { }
  addChildInfo(childObj:any){
    return this.http.post<any>(this.baseUrl+'api/ChildDetails/Add-Child-Info',childObj)
  }

  getChildInfo(){
    return this.http.get<any>(this.baseUrl+'api/ChildDetails/Get-Child-Info')
  }
  getIdChildInfo(idObj:number){
    return this.http.get<any>(this.baseUrl+'api/ChildDetails/Get-Child-Info-byID/'+idObj)
  }

  deleteChildInfo(idObj:number){
    return this.http.get<any>(this.baseUrl+'api/ChildDetails/delete-child-info-byId/'+idObj)
  }

  updateChildInfo(updatedData:any){
    return this.http.put<any>(this.baseUrl+'api/ChildDetails/update-child-info-byId/'+updatedData.childID,updatedData)
  }

  getHistory(){
    return this.http.get<any>(this.baseUrl+'api/ChildDetails/Get-Deleted-Child-Info')
  }
}
