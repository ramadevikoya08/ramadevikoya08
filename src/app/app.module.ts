import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { AppsComponent } from './apps/apps.component';
import { VehiclesummeryComponent } from './vehiclesummery/vehiclesummery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountsComponent } from './accounts/accounts.component';
import {HttpClientModule} from'@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CreateaccountsComponent } from './createaccounts/createaccounts.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeetableComponent } from './employeetable/employeetable.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { RupeePipe } from './rupee.pipe';
import { CurrencyPipe } from './currency.pipe';
import { AboutUsModule } from './about-us/about-us.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    InterpolationComponent,
    EventbindingComponent,
    AppsComponent,
    VehiclesummeryComponent,
    AccountsComponent,
    ProductsComponent,
    CreatevehicleComponent,
    CreateaccountsComponent,
    EmployeeformComponent,
    EmployeetableComponent,

    EmployeedetailsComponent,
     RupeePipe,
     CurrencyPipe,
     ParentComponent,
     ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule ,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
 