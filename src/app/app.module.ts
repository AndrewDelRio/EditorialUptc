import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageEdUptcComponent } from './page-ed-uptc/page-ed-uptc.component';
import { NavBarEncabezado1Component } from './page-ed-uptc/nav-bar-encabezado1/nav-bar-encabezado1.component';
import { CarouselUptcComponent } from './page-ed-uptc/carousel-uptc/carousel-uptc.component';

@NgModule({
  declarations: [
    AppComponent,
    PageEdUptcComponent,
    NavBarEncabezado1Component,
    CarouselUptcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
