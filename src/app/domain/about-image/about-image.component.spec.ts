import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutImageComponent } from './about-image.component';

describe('AboutImageComponent', () => {
  let component: AboutImageComponent;
  let fixture: ComponentFixture<AboutImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutImageComponent]
    });
    fixture = TestBed.createComponent(AboutImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
