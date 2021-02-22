import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderComponent } from './components/order/order.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AuthGuard } from './gaurds/auth.guard';


const routes: Routes = [
  { 
    path: 'inventory', component: InventoryComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN']}
  },

  { 
    path: 'category/:categoryName', component: ProductListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['USER']}
  },
  {   
      path: 'cart', component: CartComponent ,
      canActivate: [AuthGuard],
      data: { roles: ['USER']}
  },
  { 
    path: 'order/:cartId', component: OrderComponent ,
    canActivate: [AuthGuard],
    data: { roles: ['USER']}
  },
  {
     path: 'orders', component: OrderListComponent,
     canActivate: [AuthGuard],
     data: { roles: ['USER']}
  },
  { 
    path: '**', component: HomePageComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
