import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../service/product';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private service:ProductService) { }

  ngOnInit(): void {
    
    this.getAllProduct();

  }

  productList:Product[]= [];

  getAllProduct(){


          this.service.getAllProducts().subscribe(products => this.productList = products );

            console.log(this.productList);

  }



}
