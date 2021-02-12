import { Component, Inject, Injectable, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecomm-frontend';

  productCategories: any = [];

  constructor(@Inject(DOCUMENT) private document: Document, private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProductCategories();
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
