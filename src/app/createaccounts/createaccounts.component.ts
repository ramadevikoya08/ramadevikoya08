import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-createaccounts',
  templateUrl: './createaccounts.component.html',
  styleUrls: ['./createaccounts.component.css']
})
export class CreateaccountsComponent implements OnInit {
  accountForm:FormGroup=new FormGroup(
    {
      craetedAt:new FormControl(),
      account_name:new FormControl(),
      account_number:new FormControl(),
      Available_balance:new FormControl(),
      currency:new FormControl(),
      card:new FormArray([])
    }
  )
     
  submit()
  {
    console.log(this.accountForm);
    console.log(this.accountForm.value);
    this.accountService.postaccounts(this.accountForm.value).subscribe(
      
        (data:any)=>
        {
          alert("success")
        },
        (error:any)=>
        {
          alert(error);
        }
      
    )

  }
  get cardFormArray()
  {
    return this.accountForm.get('card')as FormArray
  }
  add()
  {
    this.cardFormArray.push(new FormGroup(
      {
        cardno:new FormControl(),
        expiry:new FormControl(),
        cvv:new FormControl()
      }
    )
  )
  }
  delete(i:any)
  {
    this.cardFormArray.removeAt(i);
  }

  constructor(private accountService:AccountsService) { }

  ngOnInit(): void {
  }

}
