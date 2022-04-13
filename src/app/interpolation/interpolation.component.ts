import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  name="abc";
  number=123;
  boolean=true;
  undefined=undefined;
  array=[1,2,3];
  object={
    name:'jjj'
  
  }
  balance=NaN;
  user=null;

  person={
    
    age:20
  }
  dob="02/12/2000"
  


  constructor() { }

  ngOnInit(): void {
  }

}
