import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any=[ ];
 
  constructor(private productService:ProductsService)
   {
    productService.getProducts().subscribe
    (
      (data:any)=>
        {
        this.products=data;
      },
      (error:any)=>{
        alert("Internal server error")
      }
    )
   }


  ngOnInit(): void {
  }

}
