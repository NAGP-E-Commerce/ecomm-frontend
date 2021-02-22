import { Component, NgModule, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';

// @NgModule({
//   imports: [
//       MDBBootstrapModule.forRoot()
//   ]
// })

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  productCategory: any;
  products: Product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    
    this.fetchProductCategoryByName()
  }

fetchProductCategoryByName() {
  let categoryName = environment.defaultCategory;
  return this.productService.getProductCategoryByName(categoryName).subscribe((res: {}) => {
    this.productCategory = res;
    this.products = this.productCategory.product;
    this.products = this.products.slice(0,4);
  })
}

}
