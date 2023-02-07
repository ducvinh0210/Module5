import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListFacilityComponent } from './facilities/list-facility/list-facility.component';
import { EditFacilityComponent } from './facilities/edit-facility/edit-facility.component';
import { CreateFacilityComponent } from './facilities/create-facility/create-facility.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ListFacilityComponent,
    EditFacilityComponent,
    CreateFacilityComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
    ListContractComponent,
    CreateContractComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
