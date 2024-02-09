import { Component } from '@angular/core';
import { SponserDetailsService } from '../allServices/sponser-details.service';

@Component({
  selector: 'app-supporters',
  templateUrl: './supporters.component.html',
  styleUrls: ['./supporters.component.css']
})
export class SupportersComponent {

  sponserData:any=[];
  constructor(private sc:SponserDetailsService){}
  ngOnInit(){
    
    this.getSponserDetails();
    
  }
  getSponserDetails(){
    this.sc.getSponserInfo().subscribe((info: any)=>{
      this.sponserData=info;
      console.log("RETRIEVING SPONSER DETAILS into supporters page",this.sponserData);
    })
  }
}
