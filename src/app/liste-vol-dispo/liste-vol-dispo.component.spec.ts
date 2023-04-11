import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVolDispoComponent } from './liste-vol-dispo.component';

describe('ListeVolDispoComponent', () => {
  let component: ListeVolDispoComponent;
  let fixture: ComponentFixture<ListeVolDispoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeVolDispoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeVolDispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
