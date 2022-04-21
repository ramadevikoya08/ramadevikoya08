import { Interpolation } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutcompanyComponent } from './about-us/aboutcompany/aboutcompany.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AppComponent } from './app.component';
import { AppsComponent } from './apps/apps.component';
import { AuthGuard } from './auth.guard';
import { CreateaccountsComponent } from './createaccounts/createaccounts.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeetableComponent } from './employeetable/employeetable.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesummeryComponent } from './vehiclesummery/vehiclesummery.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path:"interpolation",component:InterpolationComponent},
    {path:"eventbinding",component:EventbindingComponent},
    {path:"apps",component:AppsComponent},
    {path:"vehiclesummery",component:VehiclesummeryComponent},
    {path:"home",component:HomeComponent},
    {path:"Accounts",component:AccountsComponent},
    {path:"products",component:ProductsComponent},
    {path:"createvehicle",component:CreatevehicleComponent},
    {path:"createaccounts",component:CreateaccountsComponent},
    {path:"Employeeform",component:EmployeeformComponent},
    {path:"Employeetable",component:EmployeetableComponent},
    {path:"employeedetails/:id",component:EmployeedetailsComponent},
    {path:"editemployeedetails/:id",component:EmployeeformComponent},
    {path:"aboutcompany",component:AboutcompanyComponent},
    {path:'contactus', loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule)},
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
