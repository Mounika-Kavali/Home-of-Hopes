import { Component } from '@angular/core';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { AddPaymentDetailsService } from '../allServices/add-payment-details.service';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {

  rupeeSign=faIndianRupeeSign;
  ngAmt:any;
  noError=false;
  msg:string="";
  doneIcon=faThumbsUp;

  // API variable names and ngModel names should be match,orelse 500 error in UI will occur
  paymentForm:any={
    amountPaid:0,
    fullName:"",
    emailId:"",
    phone:"",
    city:"",
    country:"",
  }


constructor(private paymt:AddPaymentDetailsService){}
  addPayment(){
    
      this.paymt.addPaymentInfo(this.paymentForm)
      .subscribe({
        next:(vol=>{
          this.noError=true;
          this.msg=vol.message;
          // alert(this.msg);
          console.log(this.msg);
          console.log(vol);
          this.paymentFormReset();
        }),
        error:(err=>{
          alert(err?.error.message);
          
        })
        
      })
      console.log(this.paymentForm);
    
  }
  paymentFormReset(){
    
    this.paymentForm.amountPaid="";
    this.paymentForm.fullName="";
    this.paymentForm.emailId="";
    this.paymentForm.phone="";
    this.paymentForm.city="";
    this.paymentForm.country="";
  }
}
