import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthService } from 'src/app/services/AuthService';
import { ProductlistingService } from 'src/app/services/productlisting.service';
import { ShareDataService } from 'src/app/services/share-data.service';
import { KeycloakService } from "keycloak-angular";
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() productCategories: any = [];
  @Input() cart = null;
  searchText: string = "";
  products: any;
  subscription: Subscription;
  userName: string="";
  isUserLoggedIn: boolean = false;
  isAdminUser: boolean = false;

  constructor(
    private productListingService: ProductlistingService,
    private sharedDataService: ShareDataService,
    private cartService: CartService,
    private authService: AuthService,
    private keycloakService: KeycloakService
  ) { }

  ngOnInit(): void {

     this.productListingService.getAllProducts().subscribe((res: {}) => {
       this.products = res;
      })
      
     this.sharedDataService.updateSearchText(this.searchText);

     let user = localStorage.getItem("userId");
     if ( user != null && user !=null) {
       this.userName = user;
       this.isUserLoggedIn = true;
       this.isUserAdmin();
     }
     this.getCurrentUserCart();
   }
   
   isUserAdmin() {
    let userRoles: any = this.authService.getLoggedUser(); 
    if(userRoles != null && userRoles.length > 0 &&   userRoles.includes("admin")) {
    this.isAdminUser = true }
  }

   getCurrentUserCart() {
    let userId:string = localStorage.getItem("userId");
      if (userId != null && "" != userId) {
        this.cartService.getCartByUserId(userId).subscribe((res: {}) => {
          this.cart = res;
      });
    }
   }

  // Open and close sidebar
  therichpost_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }

  therichpost_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

  onSearchSubmit(data: any) {
    this.searchText = data.searchText;
    this.sharedDataService.updateSearchText(this.searchText);
  }

  logout() {
    this.keycloakService.logout();
    this.keycloakService.getKeycloakInstance().clearToken();
    localStorage.clear();
  }

}
