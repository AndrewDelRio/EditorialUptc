import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEdUptcComponent } from './page-ed-uptc.component';
import {BooksComponent} from './books/books.component';
import {CarouselUptcComponent} from './carousel-uptc/carousel-uptc.component';
import {ConvocationsComponent} from './convocations/convocations.component';
import {FooterComponent} from './footer/footer.component';
import {NavBarEncabezado1Component} from './nav-bar-encabezado1/nav-bar-encabezado1.component';
import {NavegationPageComponent} from './navegation-page/navegation-page.component';
import {NoveltiesComponent} from './novelties/novelties.component';



describe('PageEdUptcComponent', () => {
  let component: PageEdUptcComponent;
  let fixture: ComponentFixture<PageEdUptcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEdUptcComponent,BooksComponent,CarouselUptcComponent,ConvocationsComponent
      ,FooterComponent,NavBarEncabezado1Component,NavegationPageComponent,NoveltiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEdUptcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
