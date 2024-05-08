import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesHeadComponent } from './services-head.component';

describe('ServicesHeadComponent', () => {
  let component: ServicesHeadComponent;
  let fixture: ComponentFixture<ServicesHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesHeadComponent]
    });
    fixture = TestBed.createComponent(ServicesHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
