import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SocialNet } from 'src/app/page-ed-uptc/nav-bar-encabezado1/social-net';

@Injectable({
  providedIn: 'root',
})
export class SocialNetService {
  apiSocialNet: string = 'social_net.json';

  constructor(public _http: HttpClient) {}
  getSocialNet(): Observable<SocialNet[]> {
    return this._http.get<SocialNet[]>(
      `${environment.API}${this.apiSocialNet}`
    );
  }
}
