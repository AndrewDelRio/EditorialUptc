import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import{CarouselUptcComponent } from '../app/page-ed-uptc/carousel-uptc/carousel-uptc.component';
import { PageEdUptcComponent } from './page-ed-uptc/page-ed-uptc.component';
const routes: Routes = [
  {
    path : '',
    redirectTo : '/home',
    pathMatch: 'full'
  },
  {
    path : 'home',
    component : PageEdUptcComponent
  },
  {
    path : 'home/banner',
    component : CarouselUptcComponent
=======
import { BooksComponent } from './page-ed-uptc/books/books.component';
import { CarouselUptcComponent } from './page-ed-uptc/carousel-uptc/carousel-uptc.component';
import { ConvocationsComponent } from './page-ed-uptc/convocations/convocations.component';
import { NoveltiesComponent } from './page-ed-uptc/novelties/novelties.component';
import { PageEdUptcComponent } from './page-ed-uptc/page-ed-uptc.component';

const routes: Routes = [
  {
    path: '', component: PageEdUptcComponent,
    children: [
      {
        path: '',
        component: CarouselUptcComponent
      },
      {
        path: 'books',
        component: BooksComponent
      },
      {
        path: 'convocations',
        component: ConvocationsComponent
      }
      ,
      {
        path: 'novelties',
        component: NoveltiesComponent
      }
    ]
>>>>>>> origin/develop
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
