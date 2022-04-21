import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })
  email=" ";
  password=" ";
  
  signin()
  {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
    this.loginService.postlogin(this.loginForm.value).subscribe(
      (data:any)=>
      {
        alert("success")
        console.log(data);
        sessionStorage.setItem("myAppToken",data.token);
        this.router.navigateByUrl("/dashboard");
      },
      (error:any)=>
      {
        alert("error")
      }
    )
   
  }



  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

}
