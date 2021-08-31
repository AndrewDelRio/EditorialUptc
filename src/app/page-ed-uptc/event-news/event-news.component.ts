import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-event-news',
  templateUrl: './event-news.component.html',
  styleUrls: ['./event-news.component.scss']
})
export class EventNewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.carousel').carousel();
  }
}
