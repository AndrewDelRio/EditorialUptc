import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegationPageComponent } from './navegation-page.component';

describe('NavegationPageComponent', () => {
  let component: NavegationPageComponent;
  let fixture: ComponentFixture<NavegationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
