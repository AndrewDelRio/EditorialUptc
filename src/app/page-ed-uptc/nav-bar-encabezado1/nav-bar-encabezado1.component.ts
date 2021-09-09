import { Component, OnInit } from '@angular/core';
import { SocialNetService } from 'src/app/services/social-net.service';
import { SocialNet } from './social-net';

@Component({
  selector: 'app-nav-bar-encabezado1',
  templateUrl: './nav-bar-encabezado1.component.html',
  styleUrls: ['./nav-bar-encabezado1.component.scss'],
})
export class NavBarEncabezado1Component implements OnInit {
  socialNet: SocialNet[] = [];
  constructor(public socialNetService: SocialNetService) {}

  ngOnInit(): void {
    this.getSocialNet();
  }
  getSocialNet(){
    this.socialNetService.getSocialNet().subscribe((nets) => {
      this.socialNet = nets;
      console.log(this.socialNet);
    })
  }
}
