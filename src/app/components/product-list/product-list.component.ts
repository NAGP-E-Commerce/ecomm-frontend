import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductlistingService } from 'src/app/services/productlisting.service';
import { SharedDataService } from 'src/app/services/sharedData.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productCategory: any;
  product: any;
  products: any;
  private selectedMessage:any = "";

  @Input() searchText: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private toastrService: ToastrService,
    private productListingService: ProductlistingService ,
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit(): void {
   /* this.route.params.subscribe(routeParams => {
      console.log(routeParams);
      var categoryName = routeParams['categoryName'];
      if (categoryName == null || categoryName == undefined) {
        categoryName = 'Cloth';
      }
      this.fetchProductCategoryByName(categoryName);
    }); */

      
    if (this.selectedMessage != null && this.selectedMessage != "") {
         this.sharedDataService.currentMessage.subscribe(message => (this.selectedMessage= message)); //<= Always get current value!
         this.onSearchSubmit(this.selectedMessage);
       } else {
         this.productListingService.getAllProducts().subscribe((res: {}) => {
         this.products = res;
       })
      }
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

  onSearchSubmit(searchText: any){
    this.productListingService.getSimilarProductByName(searchText).subscribe((res: {}) => {
      this.products = res;
   })
    alert("this.products=>" + this.products)
  }

}
