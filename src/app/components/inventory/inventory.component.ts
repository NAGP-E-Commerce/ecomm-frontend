import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  stocks: any = [];
  constructor(private inventoryService: InventoryService, private router: Router) { }

  ngOnInit(): void {
    this.getOrdersByUserId();
  }

  getOrdersByUserId() {
    return this.inventoryService.getStocks().subscribe((res: {}) => {
      this.stocks = res;
    });
  }

  continueShopping() {
    this.router.navigateByUrl('/category/' + environment.defaultCategory);
  }

}
