import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDataComponent } from './delivery-data.component';

describe('DeliveryDataComponent', () => {
  let component: DeliveryDataComponent;
  let fixture: ComponentFixture<DeliveryDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryDataComponent]
    });
    fixture = TestBed.createComponent(DeliveryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
