import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaccountsComponent } from './createaccounts.component';

describe('CreateaccountsComponent', () => {
  let component: CreateaccountsComponent;
  let fixture: ComponentFixture<CreateaccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateaccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
