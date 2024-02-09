import { Component,OnInit } from '@angular/core';
import { AddContactDetailsService } from 'src/app/allServices/add-contact-details.service';
import { AddPaymentDetailsService } from 'src/app/allServices/add-payment-details.service';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Router} from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  
  arrData:any=[];
  individualAmt:any;
  fundsTotal!:number;
  i_icon=faInfoCircle;
  constructor(private contact:AddContactDetailsService,private donatedAmount:AddPaymentDetailsService,private router:Router ){}


  donationPage(){
    this.router.navigate(['/admin-navigation/funds']);
  }
    
  ngOnInit() {
    this.getContDetails();

    this.fundsTotal=this.donatedAmount.getData();
    
  
  }


  // fundsAmount(){
  //   console.log("qwerty")
  //   this.donatedAmount.donationTOT.subscribe((res:number)=>{
  //   this.fundsTotal=res
      
  //   });
  // }
  

  
  getContDetails(){
    this.contact.getContactInfo().subscribe(Data=>{
      this.arrData=Data;
      console.log("RETRIEVING CONTACT DETAILS ",this.arrData);
    })
  }
  
  
  

  // writing like this for TOTAL SUM causing error, ie sum calculation is done in 4tyms
  // totalAmt(individualAmt: number){
  //   this.tot=this.tot+individualAmt;
  //   console.log(this.tot);
  // }
}
