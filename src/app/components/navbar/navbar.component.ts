import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductCategory } from '../../models/ProductCategory'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  productCategories: any = [];

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    console.log("here");
    this.fetchProductCategories();
    console.log("Categories -> " + this.productCategories);
  }

  fetchProductCategories() {
    return this.productService.getProductCategories().subscribe((res: {}) => {
      this.productCategories = res;
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

}
