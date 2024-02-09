import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../allServices/auth.service';
import { Router } from '@angular/router';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{

  backArrow=faArrowLeft;
  reactiveF!:FormGroup;
  msg!:string;
  Error=false;
  submitted=false;

  constructor(private fb:FormBuilder,private auth:AuthService,private route:Router){}
  get f(){
    return this.reactiveF.controls;
  }
  onLogin(){
    // this.submitted=true;
    if(this.reactiveF.valid){
      this.auth.loginAdmin(this.reactiveF.value)
      .subscribe({
        next:(res)=>{
          this.route.navigate(['/admin-navigation']);
          // this.Error=true;
          // this.msg=res.message;
          // console.log(this.msg);
        },
        error:(err)=>{
          
          this.Error=true;
          this.msg=err?.error.message;
          console.log(this.msg);
          this.reactiveF.reset();
        }
        
        
      })
    }
    
  }
  
  backToHome(){
    this.route.navigate([""])
  }


  ngOnInit(): void {
    this.reactiveF=this.fb.group({
      emailId:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required, Validators.minLength(4), Validators.maxLength(15)])
    })
  }
  get PWD(): FormControl{
    return this.reactiveF.get('password') as FormControl;
  }
  get MAIL(): FormControl{
    return this.reactiveF.get('emailId') as FormControl;
  }

}
