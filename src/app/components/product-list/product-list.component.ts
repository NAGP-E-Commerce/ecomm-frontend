import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductlistingService } from 'src/app/services/productlisting.service';
import { ShareDataService } from 'src/app/services/share-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productCategory: any;
  product: any;
  products: any;
  searchText: string = "";

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private toastrService: ToastrService,
    private productListingService: ProductlistingService,
    private sharedDataService: ShareDataService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      console.log(routeParams);
      var categoryName = routeParams['categoryName'];
      if (categoryName == null || categoryName == undefined) {
        categoryName = environment.defaultCategory;
      }
      //this.fetchProductCategoryByName(categoryName);
      this.getProductCategoryByName(categoryName);
    });

     this.getSearchText();
  }

  getSearchText() {
    this.sharedDataService.getSearchText().subscribe(text => {
      this.searchText = text;

      if (this.searchText != null && this.searchText != "") {
        this.onSearchSubmit(this.searchText);
      } else {
        this.productListingService.fetchAllProducts().subscribe((res: {}) => {
          this.products = res;
        })
      }
    });
  }


  getProductCategoryByName(categoryId: string) {
    return this.productListingService.fetchProductCategoryByName(categoryId).subscribe((res: {}) => {
      this.productCategory = res;
      this.product = this.productCategory.product;
    })
  }

  fetchProductCategoryByName(categoryName: string) {
    return this.productService.getProductCategoryByName(categoryName).subscribe((res: {}) => {
      this.productCategory = res;
      this.product = this.productCategory.product;
    })
  }


  addProductToCart(productId: string) {
    return this.cartService.addProductToCart(productId).subscribe((res: {}) => {
      if (res == null || res == undefined) {
        this.toastrService.error(productId + " can not add to cart due to Low Stock.");
      } else {
        this.toastrService.success(productId + " added to Cart.");
      }
    })
  }

  onSearchSubmit(searchText: any) {
    this.productListingService.fetchProductByName(searchText).subscribe((res: {}) => {
      this.products = res;
    })

  }

}
