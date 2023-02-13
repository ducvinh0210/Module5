import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoryComponent } from './category/category.component';

import {HttpClientModule} from "@angular/common/http";
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {HeaderModule} from "./header/header.module";

@NgModule({
  declarations: [
    AppComponent,

    CategoryComponent,

    ProductListComponent,

    ProductCreateComponent,

    ProductEditComponent,

    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HeaderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
