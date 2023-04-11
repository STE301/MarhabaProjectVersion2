import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherVolComponent } from './chercher-vol.component';

describe('ChercherVolComponent', () => {
  let component: ChercherVolComponent;
  let fixture: ComponentFixture<ChercherVolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChercherVolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChercherVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
