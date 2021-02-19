import { Component, Inject, Injectable, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { Cart } from './models/Cart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecomm-frontend';

  productCategories: any = [];

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProductCategories();
    this.getCartByUserId("anonymous")
  }

  getCartByUserId(userId) {
    return this.cartService.getCartByUserId(userId).subscribe((res: {}) => {
      var cart: any = res;
      localStorage.setItem("userId", cart.userId);
      localStorage.setItem("cartId", cart.id);
    })
  }

  fetchProductCategories() {
    return this.productService.getProductCategories().subscribe((res: {}) => {
      this.productCategories = res;
    })
  }
  
  // Open and close sidebar
  therichpost_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }

  therichpost_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
}
