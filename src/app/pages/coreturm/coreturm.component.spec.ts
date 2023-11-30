import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreturmComponent } from './coreturm.component';

describe('CoreturmComponent', () => {
  let component: CoreturmComponent;
  let fixture: ComponentFixture<CoreturmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreturmComponent]
    });
    fixture = TestBed.createComponent(CoreturmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
