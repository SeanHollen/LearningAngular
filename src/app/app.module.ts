import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcomePage/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [ AppComponent, WelcomeComponent],
  imports: [ BrowserModule, HttpClientModule, ProductModule, AppRoutingModule],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
