import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.css']
})
export class EmployeetableComponent implements OnInit {
  employees:any=[ ];
 
  constructor(private employeeService:EmployeeService,private router:Router)
   {
    employeeService.getEmpolyee().subscribe
    (
      (data:any)=>
        {
        this.employees=data;
      },
      (error:any)=>{
        alert("Internal server error")
      }
    )
   }
    
  view(id:any)
  {
     this.router.navigateByUrl("/dashboard/employeedetails"+"/"+id);  
    
  }
  edit(id:any)
  {
    this.router.navigateByUrl("/dashboard/editemployeedetails"+"/"+id);
  }
 




  


  ngOnInit(): void {
  }

}
