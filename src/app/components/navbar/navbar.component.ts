import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProductlistingService } from 'src/app/services/productlisting.service';
import { ShareDataService } from 'src/app/services/share-data.service';



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

  constructor(
    private productListingService: ProductlistingService,
    private sharedDataService: ShareDataService
  ) { }

  ngOnInit(): void {

     this.productListingService.getAllProducts().subscribe((res: {}) => {
       this.products = res;
      })
      
     this.sharedDataService.updateSearchText(this.searchText);
     
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

}
