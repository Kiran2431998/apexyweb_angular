import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingshipmentComponent } from './trackingshipment.component';

describe('TrackingshipmentComponent', () => {
  let component: TrackingshipmentComponent;
  let fixture: ComponentFixture<TrackingshipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackingshipmentComponent]
    });
    fixture = TestBed.createComponent(TrackingshipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
