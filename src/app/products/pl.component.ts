import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs"; 
import { IProduct } from './product';
import { ProductService } from "./product.service";
import { ProductServiceOld } from "./product.serviceOld";

@Component({
  selector: "pm-products",
  templateUrl: "./pl.component.html",
  styleUrls: ["./pl.component.css"]
})
export class PLComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService, 
    private productServiceOld: ProductServiceOld) {}
  pageTitle = "Products"; 
  imageWidth = 50;
  imageMargin = 2;
  toShowImage: boolean = true;
  listFilter: string = "";
  products: IProduct[] = []; 
  sub!: Subscription;
  toggleImage(): void {
    this.toShowImage = !this.toShowImage
  }
  onRatingClicked(message: string): void {
    this.pageTitle = message;
  }
  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: pr => this.products = pr
    });
    // this.products = this.productServiceOld.getProducts(); 
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
