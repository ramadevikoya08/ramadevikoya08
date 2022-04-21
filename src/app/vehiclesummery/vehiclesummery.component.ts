import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehiclesummery',
  templateUrl: './vehiclesummery.component.html',
  styleUrls: ['./vehiclesummery.component.css']
})
export class VehiclesummeryComponent implements OnInit {
  Vehicles:any=[ ];
 
  

  constructor(private vehicleService:VehicleService)
   {
    vehicleService.getVehicles().subscribe
    (
      (data:any)=>
        {
        this.Vehicles=data;
      },
      (error:any)=>{
        alert("Internal server error")
      }
    )
   }
   filterTerm=" ";

   filter()
   {
     this.vehicleService.getfilterdVehicles(this.filterTerm).subscribe
     (
       (data:any)=>
       {
       this.Vehicles=data;
     },
     (error:any)=>
     {
     alert("Internal server error")
    }

     )

  }
  column=" ";
  order=" ";
  sort()
  {
    this.vehicleService.getsortedVehicles(this.column,this.order).subscribe
    (
      (data:any)=>
      {
        this.Vehicles=data;
      },
      (error:any)=>
      {
        alert("internal server error")
      }
      

    )
  }
  page1=" ";
  limit=" ";
  page()
  {
    this.vehicleService.getpagedVehicles(this.page1,this.limit).subscribe
    (
      (data:any)=>
      {
        this.Vehicles=data;
      },
      (error:any)=>
      {
        alert("Internal server error")
      }
    )
  }
  delete(Vehicleid:any)
  {
    this.vehicleService.deleteVehicle(Vehicleid).subscribe(
      
      (data:any)=>
      {
        alert("delete")
      },
      (error:any)=>
      {
        alert("error")
      }
      
      )
    
  }

   

  ngOnInit(): void {
  }

}
