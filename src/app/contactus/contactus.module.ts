import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactaddressComponent } from './contactaddress/contactaddress.component';


@NgModule({
  declarations: [
    ContactaddressComponent
  ],
  imports: [
    CommonModule,
    ContactusRoutingModule
  ]
})
export class ContactusModule { }
