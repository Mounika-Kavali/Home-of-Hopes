import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DonateComponent } from './donate/donate.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './adminDashboard/admin-home/admin-home.component';
import { ChildrenDetailsComponent } from './adminDashboard/children-details/children-details.component';
import { FundsComponent } from './adminDashboard/funds/funds.component';
import { SponsersComponent } from './adminDashboard/sponsers/sponsers.component';
import { NavigationAdminHomeComponent } from './navigation-admin-home/navigation-admin-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SupportersComponent } from './supporters/supporters.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    ContactUsComponent,
    AdminLoginComponent,
    GalleryComponent,
    DonateComponent,
    AdminHomeComponent,
    ChildrenDetailsComponent,
    FundsComponent,
    SponsersComponent,
    NavigationAdminHomeComponent,
    SupportersComponent,
    SortPipe
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'contact', component:ContactUsComponent},
      {path: 'supporters', component:SupportersComponent},
      {path: 'donate', component:DonateComponent},
      {path: 'photos', component:GalleryComponent},
      {path: 'admin', component:AdminLoginComponent},

      
    ]),
    FontAwesomeModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
