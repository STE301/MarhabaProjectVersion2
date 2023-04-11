import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherCarteEmbarquementComponent } from './rechercher-carte-embarquement.component';

describe('RechercherCarteEmbarquementComponent', () => {
  let component: RechercherCarteEmbarquementComponent;
  let fixture: ComponentFixture<RechercherCarteEmbarquementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherCarteEmbarquementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercherCarteEmbarquementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
