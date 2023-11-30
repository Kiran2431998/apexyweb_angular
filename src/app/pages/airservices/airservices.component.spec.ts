import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirservicesComponent } from './airservices.component';

describe('AirservicesComponent', () => {
  let component: AirservicesComponent;
  let fixture: ComponentFixture<AirservicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirservicesComponent]
    });
    fixture = TestBed.createComponent(AirservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
