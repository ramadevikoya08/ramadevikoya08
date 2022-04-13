import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent implements OnInit {
  vehicleForm:FormGroup=new FormGroup(
    {
    vehicle:new FormControl(),
    manufacturer:new FormControl(),
    color:new FormControl(),
    type:new FormControl(),
    model:new FormControl(),
    fuel:new FormControl(),
    id:new FormControl()
    }



  )
  submit()
  {
    console.log(this.vehicleForm);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
