import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: 'category/:categoryName', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent },
  { path: '**', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
