import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service:ProductService) { }

  ngOnInit(): void {
  }

  deleteProduct(product){


      this.service.deleteProduct(product);


  }



}
