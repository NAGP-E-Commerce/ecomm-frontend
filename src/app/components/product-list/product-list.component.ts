import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productCategory: any;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      console.log(routeParams);
      var categoryName = routeParams['categoryName'];
      if (categoryName == null || categoryName == undefined) {
        categoryName = 'Phone';
      }
      this.fetchProductCategoryByName(categoryName);
    });
  }

  fetchProductCategoryByName(categoryName: string) {
    return this.productService.getProductCategoryByName(categoryName).subscribe((res: {}) => {
      this.productCategory = res;
      this.product = this.productCategory.product;
    })
  }


  addProductToCart(productCode: string) {
    return this.cartService.addProductToCart(productCode).subscribe((res: {}) => { })
  }

}
