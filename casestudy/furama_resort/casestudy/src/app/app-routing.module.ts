import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListFacilityComponent} from "./facilities/list-facility/list-facility.component";
import {HomeComponent} from "./home/home.component";
import {EditFacilityComponent} from "./facilities/edit-facility/edit-facility.component";
import {CreateFacilityComponent} from "./facilities/create-facility/create-facility.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {EditCustomerComponent} from "./customer/edit-customer/edit-customer.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {ListContractComponent} from "./contract/list-contract/list-contract.component";
import {CreateContractComponent} from "./contract/create-contract/create-contract.component";


const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"facilities",component:ListFacilityComponent},
  {path:"facilities/edit/:id", component: EditFacilityComponent},
  {path:"facilities/create", component:CreateFacilityComponent},
  {path:"customers",component:ListCustomerComponent},
  {path:"home",component:HomeComponent},
  {path:"customers/create",component:CreateCustomerComponent},
  {path:"customers/edit/:id", component:EditCustomerComponent},
  {path:"contracts", component:ListContractComponent},
  {path:"contracts/create", component:CreateContractComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
