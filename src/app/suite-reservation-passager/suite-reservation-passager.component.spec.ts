import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteReservationPassagerComponent } from './suite-reservation-passager.component';

describe('SuiteReservationPassagerComponent', () => {
  let component: SuiteReservationPassagerComponent;
  let fixture: ComponentFixture<SuiteReservationPassagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiteReservationPassagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiteReservationPassagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
