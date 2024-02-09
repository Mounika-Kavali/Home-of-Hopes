import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  constructor(private router:Router){}
  homePage(){
    this.router.navigate(['']);
  }
  contactPage(){
    this.router.navigate(['/contact']);
  }
  supportersPage(){
    this.router.navigate(['/supporters']);
  }
  galleryPage(){
    this.router.navigate(['/photos']);
  }
  loginPage(){
    this.router.navigate(['/admin']);
  }
  donatePage(){
    this.router.navigate(['/donate']);
  }
  
}
