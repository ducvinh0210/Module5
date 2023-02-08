import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListFacilityComponent} from "./facilities/list-facility/list-facility.component";
import {HomeComponent} from "./home/home.component";
import {EditFacilityComponent} from "./facilities/edit-facility/edit-facility.component";
import {CreateFacilityComponent} from "./facilities/create-facility/create-facility.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";


const routes: Routes = [

  {path:"home",component:HomeComponent},
  {path:"facilities",component:ListFacilityComponent},
  {path:"facilities/edit/:id", component: EditFacilityComponent},
  {path:"facilities/create", component:CreateFacilityComponent},
  {path:"customers",component:ListCustomerComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
