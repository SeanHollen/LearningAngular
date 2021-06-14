import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from "./product.service";

@Component({
  selector: "pm-products",
  templateUrl: "./pl.component.html",
  styleUrls: ["./pl.component.css"]
})
export class PLComponent {
  constructor(private productService: ProductService) {}
  pageTitle = "Products"
  imageWidth = 50;
  imageMargin = 2;
  toShowImage: boolean = false;
  listFilter: string = "";
  products: IProduct[] = []
  toggleImage(): void {
    this.toShowImage = !this.toShowImage
  }
  onRatingClicked(message: string): void {
    this.pageTitle = message;
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts(); 
  }
}
