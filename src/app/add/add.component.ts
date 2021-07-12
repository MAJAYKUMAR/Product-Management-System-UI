import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../service/product';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    product:Product;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  addProduct(product:Product){

     this.productService.addProduct(product);


  }



}
