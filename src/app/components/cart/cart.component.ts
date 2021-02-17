import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { CartService } from "../../services/cart.service";


@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any;
  constructor(
    private cartService: CartService,
    private toastrService: ToastrService
    ) { }


  ngOnInit(): void {
    this.getCartById();
  }

  getCartById() {
    return this.cartService.getCartById().subscribe((res: {}) => {
      this.cart = res;
    })
  }

  removeProductFromCart(productId: string) {
    return this.cartService.removeProductFromCart(productId).subscribe((res: {}) => {
        this.toastrService.info(productId + " removed from Cart.");
        this.getCartById();
     })
  }
}
