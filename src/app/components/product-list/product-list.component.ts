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
  products: any;
  searchText: string = ""
  categoryName: string = ""

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
      this.categoryName = routeParams['categoryName'];
      if (this.categoryName != null && this.categoryName != "") {
      this.fetchProductCategoryByName(this.categoryName);   
    }
  });

    this.sharedDataService.getSearchText().subscribe(text => {
      this.searchText = text;
      if (this.searchText != null && this.searchText != "" ) {
        this.categoryName == "";
        this.onSearchSubmit(this.searchText);
      } else if (this.categoryName == "") {
        this.productListingService.getAllProducts().subscribe((res: {}) => {
          this.products = res;
        })
      }
    });

  }

  getSearchText() {
    /*this.sharedDataService.searchTextData.subscribe(text => {
      this.searchText = text;
      console.log("text product list: " + text);
    }); */
  }

  fetchProductCategoryByName(categoryName: string) {
    return this.productListingService.getProductsByCategories(categoryName).subscribe((res: {}) => {
      //this.productCategory = res;
      //this.products = this.productCategory.product;
      this.products = res;
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
    this.productListingService.getSimilarProductByName(searchText).subscribe((res: {}) => {
      this.products = res;
    })

  }

}
