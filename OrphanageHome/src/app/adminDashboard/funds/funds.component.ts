import { Component } from '@angular/core';
import { AddPaymentDetailsService } from 'src/app/allServices/add-payment-details.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent {

  fundsInfo:any=[];
  expensesData:any=[];
  tot: number=0;
  sortItem:string='0';
  dateNow: Date = new Date();
  totExp: any=[];



  constructor(private payInfo:AddPaymentDetailsService,private total:AddPaymentDetailsService){}
 

  getPayDetails(){
    this.payInfo.getPaymentInfo().subscribe(data=>{
      this.fundsInfo=data;
      console.log("RETRIEVING PAYMENT DETAILS ",this.fundsInfo);
      this.totalPay();
    })
  }
  totalPay(){
    console.log(this.fundsInfo.length)
    for(let index=0;index < this.fundsInfo.length;index++){
      this.tot = this.fundsInfo[index].amountPaid+this.tot;
      console.log(this.tot);
      
    }
    this.total.setData(this.tot);
  }

  sum!:number;

  expenses:any={
    food:0,
    clothing:0,
    health:0,
    education:0,
    sanitation:0,
    salaries:0,
    maintainance:0,
    others:0,
    sum:0,
    
  }
 
  onEdit:boolean=false;
  addOn=true;
  editOn:boolean=true;
  updateOn:boolean=false;
  saveOn:boolean=false;
  cancelOn=false;

  newExpenditures(){
    this.addOn=false;
    this.editOn=false;
    this.saveOn=true;
    this.cancelOn=true;
    this.onEdit=true;
    this.updateOn=false;

    this.expenses.food=0;
    this.expenses.clothing=0;
    this.expenses.health=0;
    this.expenses.education=0;
    this.expenses.sanitation=0;
    this.expenses.salaries=0;
    this.expenses.maintainance=0;
    this.expenses.others=0;
    this.expenses.sum=0;
       
  }
  saveExpenditures(){
    this.payInfo.addExpensesInfo(this.expenses).subscribe(),
    this.cancel(); 
      
    
    console.log(this.expenses,"ADDING NEW EXPENSES");
  
  }
  editExpenditures(){
    this.onEdit=true;
    this.addOn=false;
    this.updateOn=true;
    this.cancelOn=true;
    this.editOn=false;
    
     
  }
  
  cancel(){
    this.onEdit=false;
    this.addOn=true;
    this.editOn=true;
    this.saveOn=false;
    this.cancelOn=false;
    this.updateOn=false;
    this.getExpensesDetails();
  }

  ngOnInit() {
    
    this.getPayDetails();
    this.getExpensesDetails();
    
    
    
  }
 
  updateValues(receivedData:any){
    console.log(receivedData)
    this.updateOn=false;
    this.addOn=true;
    this.editOn=true;
    this.cancelOn=false;
    this.onEdit=!this.onEdit;
    

    this.payInfo.updateExpendituresAmt(receivedData).subscribe(res=>{
      this.getExpensesDetails();
    });

    
  }
  tableCount!:number;
  expButtons=false;
  expensesButtons=false;
  getExpensesDetails(){
    this.payInfo.getExpensesData().subscribe(
     
    data=>{
      this.expensesData=data;
      console.log("RETRIEVING UPDATED EXPENSES DETAILS ",this.expensesData);
      console.log("length EXPENSES DETAILS ",this.expensesData.length);
      this.totalExpenses();
      
    })
   
    
  }
  buttonsCall(iteration:number){
    
   
      if(iteration==this.expensesData.length){
       
        this.expButtons=true;
        console.log('iteration true')
        
        
      }
      else{
        this.expButtons=false;
        
        console.log("iteration false")
      }
    
   
  }
  
  totalExpenses(){
    
    for(let index=0;index < this.expensesData.length;index++){
      this.totExp[index] = this.expensesData[index].food+
      this.expensesData[index].clothing+
      this.expensesData[index].education+
      this.expensesData[index].health+
      this.expensesData[index].sanitation+
      this.expensesData[index].salaries+
      this.expensesData[index].maintainance;
      console.log(this.totExp);
      
    }
    
  }

  
}
