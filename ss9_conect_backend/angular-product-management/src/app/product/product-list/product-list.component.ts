import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = []
  p: number = 1;
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.findAll().subscribe(value => {
      console.log(value)
      this.products = value;

    })
  }

}
