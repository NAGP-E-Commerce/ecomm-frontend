import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { OrderService } from "src/app/services/order.service";
import { CartService } from "../../services/cart.service";


@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  userId = localStorage.getItem("userId");
  cart: any;
  constructor(
    private cartService: CartService,
    private toastrService: ToastrService,
    private orderService: OrderService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.getCartById();
  }

  getCartById() {
    return this.cartService.getCartByUserId(this.userId).subscribe((res: {}) => {
      this.cart = res;
      localStorage.setItem("userId", this.cart.userId);
      localStorage.setItem("cartId", this.cart.id);
    })
  }

  removeProductFromCart(productId: string) {
    return this.cartService.removeProductFromCart(productId).subscribe((res: {}) => {
      this.toastrService.info(productId + " removed from Cart.");
      this.getCartById();
    })
  }

  continueShopping() {
    this.router.navigateByUrl('/category/Cloth');
  }

  placeOrder() {
    var cartId = localStorage.getItem("cartId");
    this.orderService.placeOrder(cartId).subscribe((res: {}) => {
      if (res == null || res == undefined || res == false) {
        this.toastrService.error("Order can not be placed with cartId " + cartId);
      } else {
        this.toastrService.success("Order placed with cartId " + cartId);
      }
      this.getCartById();
    })
  }


}
