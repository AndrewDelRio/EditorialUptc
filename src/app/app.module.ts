import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageEdUptcComponent } from './page-ed-uptc/page-ed-uptc.component';
import { NavBarEncabezado1Component } from './page-ed-uptc/nav-bar-encabezado1/nav-bar-encabezado1.component';
import { CarouselUptcComponent } from './page-ed-uptc/carousel-uptc/carousel-uptc.component';
<<<<<<< HEAD
import { EventNewsComponent } from './page-ed-uptc/event-news/event-news.component';
=======
import { NavegationPageComponent } from './page-ed-uptc/navegation-page/navegation-page.component';
import { BooksComponent } from './page-ed-uptc/books/books.component';
import { NoveltiesComponent } from './page-ed-uptc/novelties/novelties.component';
import { ConvocationsComponent } from './page-ed-uptc/convocations/convocations.component';
>>>>>>> origin/develop

@NgModule({
  declarations: [
    AppComponent,
    PageEdUptcComponent,
    NavBarEncabezado1Component,
    CarouselUptcComponent,
<<<<<<< HEAD
    EventNewsComponent
=======
    NavegationPageComponent,
    BooksComponent,
    NoveltiesComponent,
    ConvocationsComponent
>>>>>>> origin/develop
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
