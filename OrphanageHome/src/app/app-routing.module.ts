import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './adminDashboard/admin-home/admin-home.component';
import { ChildrenDetailsComponent } from './adminDashboard/children-details/children-details.component';
import { FundsComponent } from './adminDashboard/funds/funds.component';
import { SponsersComponent } from './adminDashboard/sponsers/sponsers.component';
import { NavigationAdminHomeComponent } from './navigation-admin-home/navigation-admin-home.component';

const routes: Routes = [
  {
    path:"admin-navigation", component:NavigationAdminHomeComponent,
    children:[
      {path: '', component:AdminHomeComponent},
      {path: 'children-details', component:ChildrenDetailsComponent},
      {path: 'funds', component:FundsComponent},
      {path: 'sponsers', component:SponsersComponent},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
