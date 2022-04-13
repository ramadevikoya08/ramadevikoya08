import { Interpolation } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AppComponent } from './app.component';
import { AppsComponent } from './apps/apps.component';
import { CreateaccountsComponent } from './createaccounts/createaccounts.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesummeryComponent } from './vehiclesummery/vehiclesummery.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,children:[
    {path:"interpolation",component:InterpolationComponent},
    {path:"eventbinding",component:EventbindingComponent},
    {path:"apps",component:AppsComponent},
    {path:"vehiclesummery",component:VehiclesummeryComponent},
    {path:"home",component:HomeComponent},
    {path:"Accounts",component:AccountsComponent},
    {path:"products",component:ProductsComponent},
    {path:"createvehicle",component:CreatevehicleComponent},
    {path:"createaccounts",component:CreateaccountsComponent},
    {path:"",component:HomeComponent}
    
  ]},
  {path:"",component:LoginComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
