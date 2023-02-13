import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {ProductDeleteComponent} from "./product/product-delete/product-delete.component";
import {ProductModule} from "./product/product.module";


const routes: Routes = [

  // {path:"",component:ProductListComponent},
  // {path:"product/create", component:ProductCreateComponent},
  // {path:'product/edit/:productId', component:ProductEditComponent},
  // {path:'product/delete/:productId', component:ProductDeleteComponent}

  {path:'product', loadChildren:()=>ProductModule}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule


  ]
})
export class AppRoutingModule { }
