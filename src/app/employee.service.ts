import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmpolyee():Observable<any>
    {
      return this.httpClient.get("https://6222413b666291106a21d80b.mockapi.io/employees")
    }



  postEmployee(Employee:any):Observable<any>
  {
    return this.httpClient.post("https://6222413b666291106a21d80b.mockapi.io/employees",Employee)
  }
  getEmployee(id:any):Observable<any>
  {
    return this.httpClient.get("https://6222413b666291106a21d80b.mockapi.io/employees"+'/'+id)
  }
  editEmployee(employee:any):Observable<any>
  {
   return this.httpClient.put("https://6222413b666291106a21d80b.mockapi.io/employees"+'/'+employee.id,employee);
  }
  
  constructor(private httpClient:HttpClient) { }
}

