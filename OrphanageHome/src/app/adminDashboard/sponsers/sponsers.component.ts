import { Component, OnInit } from '@angular/core';
import { SponserDetailsService } from 'src/app/allServices/sponser-details.service';


@Component({
  selector: 'app-sponsers',
  templateUrl: './sponsers.component.html',
  styleUrls: ['./sponsers.component.css']
})
export class SponsersComponent implements OnInit {

  SponserChildData: any=[];
  sponserData: any=[];
  childzData:any=[];
  pop:any;
  
  constructor(private sc:SponserDetailsService){}


  ngOnInit(){
    
    this.getSponserDetails();
    
  }
  noChildData='';
  popValue=false;
  noChild=false;
  getSponserChildDetails(spon:string){
    
    this.popValue=true;
    this.sc.getSponserChildInfo(spon).subscribe((inform: any)=>{
    this.SponserChildData=inform;
    this.noChildData=this.SponserChildData.firstName;
    console.log(this.noChildData)
    console.log("RETRIEVING SPONSER-CHILD DETAILS ",this.SponserChildData);
    })
    // if(this.SponserChildData.firstName=='null'){
    //   console.log('hi')
    //   this.noChild=true;
    // }
  }
  
  getSponserDetails(){
    this.sc.getSponserInfo().subscribe((info: any)=>{
      this.sponserData=info;
      console.log("RETRIEVING SPONSER DETAILS ",this.sponserData);
    })
  }
  

  
  
}
