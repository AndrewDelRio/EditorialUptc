import { getTestBed, TestBed} from '@angular/core/testing';
import { SocialNetService } from './social-net.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {SocialNet} from '../page-ed-uptc/nav-bar-encabezado1/social-net'


describe('SocialNetService', () => {
  let service: SocialNetService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let mockResponse: SocialNet[] = [
    {
      name: 'facebook',
      url: 'facebook.com/universidaduptc/',
    },
    {
      name: 'instagram',
      url: 'instagram.com/universidaduptc/',
    },
    {
      name:'youtube',
      url: 'youtube.com/user/EdumediosUptc',
    },
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    injector = getTestBed();
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(SocialNetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Debe llamar al metodo getSocialNet y retornar las redes sociales', () => {
    service.getSocialNet().subscribe((nets)=>{
      expect(nets.length).toBe(3);
      expect(nets).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(
      'https://editorial-u-97393-default-rtdb.firebaseio.com/social_net.json'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
