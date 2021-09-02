import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PageEdUptcComponent} from './page-ed-uptc/page-ed-uptc.component';
import {CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA} from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AppComponent,PageEdUptcComponent],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
