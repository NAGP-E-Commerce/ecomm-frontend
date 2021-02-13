import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { Product } from "../../models/Product";
import { Cart } from "../../models/Cart";
import { CartService } from "../../services/cart.service";
import { Observable } from "rxjs";
import { Subscription } from "rxjs";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-cart",
  templateUrl: "./cart.component.html"
})
export class CartComponent implements OnInit, OnDestroy {

  public products: Observable<Product[]>;
  public cart: Cart;
  public itemCount: number;
  private cartSubscription: Subscription;

  public constructor(private CartService: CartService) { }

  public ngOnInit(): void {
    this.cartSubscription = this.CartService.getCartById().subscribe((Cart: any) => {
      this.cart = Cart;
      this.itemCount = 100;
      console.log("!!!!!!!" + this.cart);
    });
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
