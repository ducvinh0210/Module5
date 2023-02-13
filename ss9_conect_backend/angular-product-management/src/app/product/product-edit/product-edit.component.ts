import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  categoryList: Category[] = [];


  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('productId');
      this.getProduct(this.id)
    })

  }

  ngOnInit(): void {

    this.categoryService.getAll().subscribe(value => {
      this.categoryList = value;
    });
  }


  private getProduct(id: number) {
    return this.productService.findById(id).subscribe(value => {
      this.productForm = new FormGroup({
        name: new FormControl(value.name),
        price: new FormControl(value.price),
        description: new FormControl(value.description),
        category: new FormControl(value.category)

      });


    });

  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(data => {
      alert('cập nhật thành công');


    })


  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }


}
