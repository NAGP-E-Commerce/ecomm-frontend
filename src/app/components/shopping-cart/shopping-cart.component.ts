import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { Product } from "../../models/Product";
import { ShoppingCart } from "../../models/shopping-cart.model";
import { ProductService } from "../../services/product.service";
import { ShoppingCartService } from "../../services/shopping-cart.service";
import { Observable } from "rxjs";
import { Subscription } from "rxjs";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html"
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  public products: Observable<Product[]>;
  public cart: ShoppingCart;
  public itemCount: number;

  private cartSubscription: Subscription;

  public constructor(private shoppingCartService: ShoppingCartService) {
  }



  public ngOnInit(): void {
    this.cartSubscription = this.shoppingCartService.getCartById().subscribe((shoppingCart: any) => {
      this.cart = shoppingCart;
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
