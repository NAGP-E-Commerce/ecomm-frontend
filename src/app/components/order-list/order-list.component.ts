import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: any = [];
  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    var userId = localStorage.getItem("userId");
    this.getOrdersByUserId(userId);
  }

  getOrdersByUserId(userId) {
    return this.orderService.getOrdersByUserId(userId).subscribe((res: {}) => {
      this.orders = res;
    });
  }

  continueShopping() {
    this.router.navigateByUrl('/category/Cloth');
  }
}
