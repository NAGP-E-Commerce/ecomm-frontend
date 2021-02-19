import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private cartService: CartService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      console.log(routeParams);
      var categoryName = routeParams['categoryName'];
      if (categoryName == null || categoryName == undefined) {
        categoryName = 'Cloth';
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


  addProductToCart(productId: string) {
    return this.cartService.addProductToCart(productId).subscribe((res: {}) => {
      if(res == null || res == undefined) {
        this.toastrService.error(productId + " can not add to cart due to Low Stock.");
      } else {
        this.toastrService.success(productId + " added to Cart.");
      }
     })
  }

}
