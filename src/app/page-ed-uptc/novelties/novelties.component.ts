import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-novelties',
  templateUrl: './novelties.component.html',
  styleUrls: ['./novelties.component.scss'],
})
export class NoveltiesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      $('.carousel').carousel({
        dist: -20,
        shift: 5,
        noWrap: false,
        fullWidth: false,
        duration: 200,
      });
    });
  }
}
