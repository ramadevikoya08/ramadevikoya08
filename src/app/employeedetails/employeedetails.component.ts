import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  employee:any={};


   constructor(private activatedRoute:ActivatedRoute,private employeeService:EmployeeService) {

    this.activatedRoute.params.subscribe(
      (data:any)=>
      {
           console.log(data);
            this.employeeService.getEmployee(data.id).subscribe
              (
                (data:any)=>
                {
                  this.employee=data;
                }
              )
      },
      (error:any)=>
      {
        alert("error");
      }
    )
  }
  

  

  ngOnInit(): void {
  }

}
