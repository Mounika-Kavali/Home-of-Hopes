import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-admin-home',
  templateUrl: './navigation-admin-home.component.html',
  styleUrls: ['./navigation-admin-home.component.css']
})
export class NavigationAdminHomeComponent implements OnInit{
  
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }
  
  myHomePage(){
    this.router.navigate(['/admin-navigation/']);
  }
  childrenPage(){
    this.router.navigate(['/admin-navigation/children-details']);
  }
  sponsersPage(){
    this.router.navigate(['/admin-navigation/sponsers']);
  }
  donationPage(){
    this.router.navigate(['/admin-navigation/funds']);
  }
  logoutPage(){
    this.router.navigate(['/admin']);
  }

  
                
  
}
