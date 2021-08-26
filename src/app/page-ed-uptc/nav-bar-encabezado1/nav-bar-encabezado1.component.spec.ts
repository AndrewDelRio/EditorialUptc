import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarEncabezado1Component } from './nav-bar-encabezado1.component';

describe('NavBarEncabezado1Component', () => {
  let component: NavBarEncabezado1Component;
  let fixture: ComponentFixture<NavBarEncabezado1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarEncabezado1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarEncabezado1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
