import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts=[ ];
   getAccounts():Observable<any>
   {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
   }
  getfilterdaccounts(filterTerm:any):Observable<any>
  {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals"+'?filter='+filterTerm)
  }
  getpagedaccounts(page1:any,limit:any):Observable<any>
  {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals"+'?page='+page1+'&limit='+limit)
  }
  getsortedaccounts(column:any,order:any):Observable<any>
  {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals"+'colomn='+'&order='+order)
  }
   

   constructor(private httpClient:HttpClient) { }
}
