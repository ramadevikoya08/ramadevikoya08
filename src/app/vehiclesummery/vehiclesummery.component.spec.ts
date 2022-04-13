import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesummeryComponent } from './vehiclesummery.component';

describe('VehiclesummeryComponent', () => {
  let component: VehiclesummeryComponent;
  let fixture: ComponentFixture<VehiclesummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesummeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
