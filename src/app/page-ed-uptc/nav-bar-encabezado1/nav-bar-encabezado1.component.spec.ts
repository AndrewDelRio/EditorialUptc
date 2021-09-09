import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SocialNetService } from 'src/app/services/social-net.service';
import { NavBarEncabezado1Component } from './nav-bar-encabezado1.component';
import { SocialNet } from './social-net';

describe('NavBarEncabezado1Component', () => {
  let component: NavBarEncabezado1Component;
  let fixture: ComponentFixture<NavBarEncabezado1Component>;
  let service: SocialNetService;
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
      name: 'youtube',
      url: 'youtube.com/user/EdumediosUptc',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarEncabezado1Component],
      providers: [SocialNetService],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarEncabezado1Component);
    component = fixture.componentInstance;
    service = component.socialNetService;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Inyeccion del servicio', () => {
    expect(service).toBeTruthy();
  });
  it('Llamado al servicio getSocialNet() de SocialNet', () => {
    spyOn(service, 'getSocialNet').and.returnValue(of(mockResponse));
    component.ngOnInit();
    expect(component.socialNet).toEqual(mockResponse);
  });
});
