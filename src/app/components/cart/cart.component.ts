import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";


@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any;
  constructor(private cartService: CartService) { }


  ngOnInit(): void {
    this.getCartById();
  }

  getCartById() {
    return this.cartService.getCartById().subscribe((res: {}) => {
      this.cart = res;
    })
  }

  removeProductFromCart(productCode: string) {
    return this.cartService.removeProductFromCart(productCode).subscribe((res: {}) => {
        alert(productCode + " removed from Cart.");
        this.getCartById();
     })
  }
}
