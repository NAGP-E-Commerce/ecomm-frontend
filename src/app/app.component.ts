import { Component, Inject, Injectable, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { Cart } from './models/Cart';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/AuthService';
import { ShareDataService } from './services/share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string="";
  isUserLoggedIn: boolean = false;

  title = 'ecomm-frontend';

  productCategories: any = [];
  cart: any;

  constructor(private cartService: CartService, private productService: ProductService,
    private authService: AuthService,) { }
  

  ngOnInit(): void {
    this.fetchProductCategories();
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    let user: any = this.authService.getLoggedUser();
    if ( user != null && user !=null) {
      localStorage.setItem("user", user);
      this.userName = user.preferred_username;
      this.isUserLoggedIn = true;
      this.getCartByUserId(this.userName)
    }
  }

  getCartByUserId(userId) {
    return this.cartService.getCartByUserId(userId).subscribe((res: {}) => {
      this.cart = res;
      localStorage.setItem("userId", this.cart.userId);
      localStorage.setItem("cartId", this.cart.id);
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
