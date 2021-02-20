import { Component, Input, OnInit } from '@angular/core';
import { ProductlistingService } from 'src/app/services/productlisting.service';
import { SharedDataService } from 'src/app/services/sharedData.service';

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

  constructor(
    private productListingService: ProductlistingService,
    private sharedDataService: SharedDataService

  ) { }

  ngOnInit(): void {
     this.productListingService.getAllProducts().subscribe((res: {}) => {
       this.products = res;
      })
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

  onSearchSubmit(data: any){
    console.log("Searched value" + data.searchText);
    this.sharedDataService.changeMessage(data.searchText);
  }


}
