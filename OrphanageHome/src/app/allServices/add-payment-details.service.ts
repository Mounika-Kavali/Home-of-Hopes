import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddPaymentDetailsService {

  // TO SHARE DATA FROM ONE COMPONENT TO ANOTHER(sibling component) USING SERVICE
  fundsAmt!:number;
  
  setData(fund: number){
    this.fundsAmt=fund;
  }
  getData(){
    return this.fundsAmt;
  }

  private baseUrl:string="https://localhost:7141/"

  constructor(private http:HttpClient) { }

  addPaymentInfo(payObj:any){
    return this.http.post<any>(this.baseUrl+'api/Payment/paymentDetails',payObj)
  }
  
  getPaymentInfo(){
    return this.http.get<any>(this.baseUrl+'api/Payment/getPaymentDetails')
  }

  updateExpendituresAmt(updatedData:any){
    // console.log(updatedData[0].id)
    return this.http.put<any>(`https://localhost:7141/api/Payment/update-expensesAmount-byId/`+updatedData.id,updatedData)
  }

  addExpensesInfo(expObj:any){
    return this.http.post<any>(this.baseUrl+'api/Payment/add-new-expensesAmounts',expObj)
  }
  getExpensesData(){
    console.log("qwertyu")
    return this.http.get<any>(this.baseUrl+'api/Payment/get-Updated-ExpensesAmount')
    
  }
 
}
