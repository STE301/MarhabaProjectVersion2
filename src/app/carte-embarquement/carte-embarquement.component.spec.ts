import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteEmbarquementComponent } from './carte-embarquement.component';

describe('CarteEmbarquementComponent', () => {
  let component: CarteEmbarquementComponent;
  let fixture: ComponentFixture<CarteEmbarquementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteEmbarquementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteEmbarquementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
