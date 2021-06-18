import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PLComponent } from '../products/pl.component';
import { ProductDetailComponent } from '../products/product-detail.component';
import { WelcomeComponent } from '../welcomePage/welcome.component';

const routes: Routes = [
  { path: "products", component: PLComponent }, 
  { path: "products/:id", component: ProductDetailComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "", redirectTo: "welcome", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
