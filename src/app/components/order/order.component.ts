import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  cartId = null;
  order: any;
  constructor(
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      console.log(routeParams);
      this.cartId = routeParams['cartId'];
      this.getOrderById();
    });
  }

  getOrderById() {
    return this.cartService.getCartById(this.cartId).subscribe((res: {}) => {
      this.order = res;
    })
  }

  continueShopping() {
    this.router.navigateByUrl('/category/' + environment.defaultCategory);
  }
}
