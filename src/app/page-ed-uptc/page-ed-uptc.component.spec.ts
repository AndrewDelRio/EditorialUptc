import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEdUptcComponent } from './page-ed-uptc.component';

describe('PageEdUptcComponent', () => {
  let component: PageEdUptcComponent;
  let fixture: ComponentFixture<PageEdUptcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEdUptcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEdUptcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
