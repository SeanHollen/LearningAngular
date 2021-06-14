import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PLComponent } from './products/pl.component';
import { StarComponent } from "./shared/star.component"; 

@NgModule({
  declarations: [ AppComponent, PLComponent, StarComponent],
  imports: [ BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
