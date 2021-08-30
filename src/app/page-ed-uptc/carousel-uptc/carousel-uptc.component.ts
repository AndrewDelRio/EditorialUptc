import { Component, OnInit } from '@angular/core';
declare const M: any;

@Component({
  selector: 'app-carousel-uptc',
  templateUrl: './carousel-uptc.component.html',
  styleUrls: ['./carousel-uptc.component.scss'],
})
export class CarouselUptcComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem, {
      indicators: true,
      duration: 400,
      fullWidth: true
    });
  }
}
