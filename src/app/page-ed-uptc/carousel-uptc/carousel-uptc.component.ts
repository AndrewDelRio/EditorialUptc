import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-carousel-uptc',
  templateUrl: './carousel-uptc.component.html',
  styleUrls: ['./carousel-uptc.component.scss'],
})
export class CarouselUptcComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    $('.carousel').carousel({
      dist: 0,
      padding: 0,
      fullWidth: true,
      indicators: true,
      duration: 100,
    });
    autoplay();
    function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 4000);
    }
  }
}
