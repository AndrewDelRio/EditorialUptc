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
    $(document).ready(function(){
      $('.slider').slider({
        fullWidth:true,
        height:600,
        duration:600
      })
    });
  }
}
