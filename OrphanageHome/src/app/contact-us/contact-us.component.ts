import { Component, OnInit } from '@angular/core';
import { faLocationDot, faMailReply,faPhone } from '@fortawesome/free-solid-svg-icons';
import { AddContactDetailsService } from '../allServices/add-contact-details.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  ngOnInit(): void {}
  

  map=faLocationDot;
  mail=faMailReply;
  heart=faHeart;
  ph=faPhone;
  noError=false;
  msg:string="";


  // API variable names(,its order) and ngModel names should be match,orelse 500 error in UI will occur
  contactForm:any={
    fullName:"",
    email:"",
    mobile:"",
    description:"",
    
  } 

  constructor(private contct:AddContactDetailsService){}
  addContacts(){
      this.noError=false;
      this.contct.addContactInfo(this.contactForm)
      .subscribe(
        {
        next:(res=>{
          this.noError=true;
          this.msg=res.message;
          // alert(this.msg);
          console.log(this.msg);
          console.log(res);
          this.contactFormReset();
        }),
        error:(err=>{
          alert(err?.error.message);
          
        })
        
      })
      console.log(this.contactForm);
    
  }
  contactFormReset(){
    this.contactForm.fullName="";
    this.contactForm.email="";
    this.contactForm.mobile="";
    this.contactForm.description="";
  }
  
}
