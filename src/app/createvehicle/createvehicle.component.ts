import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

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
    console.log(this.vehicleForm.value);
    this.vehicleService.postvehicle(this.vehicleForm.value).subscribe
    (
      (data:any)=>
      {
        alert("success");
      },
      (error:any)=>
      {
        alert("error");
      
      }
    )
  }

  constructor(private vehicleService:VehicleService) { }

  ngOnInit(): void {
  }

}
