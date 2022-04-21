import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
  employee:any={};
  EmployeeForm:FormGroup=new FormGroup(
    {
      name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      mobile:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      email:new FormControl(),
      dob:new FormControl(),
      id:new FormControl(),
      address:new FormGroup(
        {
          addressline:new FormControl(),
          city:new FormControl(),
          state:new FormControl(),
          pincode:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
        }
      ),
          education:new FormArray([]),
          role:new FormControl()

    }
  )

  submit()
  {
    if(this.employee)
  {
    this.employeeService.editEmployee(this.EmployeeForm.value).subscribe(
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
  else
  {
    console.log(this.EmployeeForm);
    console.log(this.EmployeeForm.value);
    this.employeeService.postEmployee(this.EmployeeForm.value).subscribe(
      (data:any)=>
      {
        alert("success");
      },
      (error:any)=>
      {
        alert("error")
      }
    )
  }
}

  get educationFormArray()
  {
    return this.EmployeeForm.get('education')as FormArray
  }
  add()
  {
    this.educationFormArray.push(
      new FormGroup({
       qualification:new FormControl(),
       year:new FormControl(),
       percentage:new FormControl(null,[Validators.required,Validators.minLength(0),Validators.maxLength(100)]) 
      })
      
    )
  }
  delete(i:any)
  {
    this.educationFormArray.removeAt(i);
  }

  constructor(private employeeService:EmployeeService, private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.subscribe(
      (data:any)=>
      { 

 
               console.log(data);
              this.employeeService.getEmployee(data.id).subscribe
              (
                (data:any)=>
                {
                  this.employee=data;
                  this.EmployeeForm.patchValue(data);
                }
              )
      },
      (error:any)=>
      {
        alert("error");
      }
    )


    this.EmployeeForm.get('role')?.valueChanges.subscribe(
      data=>
      {
        if(data=="FE")
        {
        this.EmployeeForm.addControl('Html',new FormControl())
        this.EmployeeForm.addControl('Angular',new FormControl())
        this.EmployeeForm.removeControl('Java')
        this.EmployeeForm.removeControl('sql')
        }
        else
        {
        
        this.EmployeeForm.addControl('Java',new FormControl())
        this.EmployeeForm.addControl('sql',new FormControl())
        this.EmployeeForm.removeControl('Html')
        this.EmployeeForm.removeControl('Angular')
      }
    }
         

  )
    }

  ngOnInit(): void {
  }

}
