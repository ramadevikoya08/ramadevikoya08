import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts:any=[ ];

   constructor(private accountService:AccountsService) {
      accountService.getAccounts().subscribe
      (
      (data:any)=>
      {
        this.accounts=data;
      },
      (error:any)=>
      {
        alert("internal service error")
      }

      
    )
    }
    filterTerm:any=" ";
    filter()
    {
      this.accountService.getfilterdaccounts(this.filterTerm).subscribe
      (
        (data:any)=>
        {
          this.accounts=data;
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
      this.accountService.getpagedaccounts(this.page1,this.limit).subscribe
      (
        (data:any)=>
        {
          this.accounts=data
        },
        (error:any)=>
        {
          alert("internal server error")
        }
      )
    }
    column=" ";
    order=" ";
    sort()
    {
      this.accountService.getsortedaccounts(this.column,this.order).subscribe
      (
        (data:any)=>
        {
          this.accounts=data;
        },
        (error:any)=>
        {
          alert("internal server error")
        }
      )
    }



  ngOnInit(): void {
  }

}
