import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { StarComponent } from '../shared/star.component';
import { PLComponent } from './pl.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    PLComponent, 
    ProductDetailComponent,
    StarComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule, 
    ProductsRoutingModule
  ]
})
export class ProductModule { }
