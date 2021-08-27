import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselUptcComponent } from './carousel-uptc.component';

describe('CarouselUptcComponent', () => {
  let component: CarouselUptcComponent;
  let fixture: ComponentFixture<CarouselUptcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselUptcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselUptcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
