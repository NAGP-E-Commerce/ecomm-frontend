import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderComponent } from './components/order/order.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AuthGuard } from './gaurds/auth.guard';


const routes: Routes = [
  { 
    path: 'inventory', component: InventoryComponent 
    //,
    //canActivate: [AuthGuard],
    //data: { roles: ['ADMIN']}
  },
  { path: 'category/:categoryName', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order/:cartId', component: OrderComponent },
  { path: 'orders', component: OrderListComponent },
  { path: '**', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
