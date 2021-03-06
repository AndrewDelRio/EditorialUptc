import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageEdUptcComponent } from './page-ed-uptc/page-ed-uptc.component';
import { NavBarEncabezado1Component } from './page-ed-uptc/nav-bar-encabezado1/nav-bar-encabezado1.component';
import { CarouselUptcComponent } from './page-ed-uptc/carousel-uptc/carousel-uptc.component';
import { NavegationPageComponent } from './page-ed-uptc/navegation-page/navegation-page.component';
import { BooksComponent } from './page-ed-uptc/books/books.component';
import { NoveltiesComponent } from './page-ed-uptc/novelties/novelties.component';
import { ConvocationsComponent } from './page-ed-uptc/convocations/convocations.component';
import { FooterComponent } from './page-ed-uptc/footer/footer.component';
import { SocialNetService } from './services/social-net.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageEdUptcComponent,
    NavBarEncabezado1Component,
    CarouselUptcComponent,
    NavegationPageComponent,
    BooksComponent,
    NoveltiesComponent,
    ConvocationsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [SocialNetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
