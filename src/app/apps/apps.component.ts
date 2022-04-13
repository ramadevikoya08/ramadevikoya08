import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {
  num1=0;
  num2=0;
  areaResult=0;
  perimeterResult=0;
  
  area()
  {
    alert(this.areaResult=this.num1*this.num2)
  }
  perimeter()
    {
      alert(this.perimeterResult=this.num1*2+this.num2*2)
    }


      names=[" "];
      name="";
      Submit()
      {
        this .names.push(this.name)
      }


      items:any=[ ];
      product="";
      quantity=0;
      price=0;
      Addtocart()
      {
        var obj:any={};
        obj.product=this.product;
        obj.quantity=this.quantity;
        obj.price=this.price;
        this.items.push(obj);
      
      }


      users:any=[""];
      name1="";
      email="";
      phone=0;
      city="";
      Signup()
      {
        var obj:any={};
        obj.name1=this.name1;
        obj.email=this.email;
        obj.phone=this.phone;
        obj.city=this.city;
        this.users.push(obj);
      }



      isRed=true;
      Change()
      {
        this.isRed= !this.isRed;
      
        }
      
      


    
  
  

   
  


  constructor() { }

  ngOnInit(): void {
  }

}
