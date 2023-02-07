import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListFacilityComponent} from "./facilities/list-facility/list-facility.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [

  {path:"home",component:HomeComponent},
  {path:"facilities",component:ListFacilityComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
