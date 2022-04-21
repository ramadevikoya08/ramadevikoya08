import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  Vehicles=[ ];
  
 getVehicles():Observable<any>
 {
   return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");

}
getfilterdVehicles(filterTerm:any):Observable<any>
{
  return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"+'?filter='+filterTerm)
}
getsortedVehicles(column:any,order:any):Observable<any>
{
  return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"+'?sortBy='+column+'&order='+order)
  
}
getpagedVehicles(page1:any,limit:any):Observable<any>
{
  return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"+'?page='+page1+'&limit='+limit)
  
}
postvehicle(vehicle:any):Observable<any>
{
 return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",vehicle);
}
deleteVehicle(id:any):Observable<any>
{
  return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"+'/'+id)
}
constructor(private httpClient:HttpClient){ }
}

