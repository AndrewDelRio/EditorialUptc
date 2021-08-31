import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
