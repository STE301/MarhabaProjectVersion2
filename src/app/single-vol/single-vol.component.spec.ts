import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVolComponent } from './single-vol.component';

describe('SingleVolComponent', () => {
  let component: SingleVolComponent;
  let fixture: ComponentFixture<SingleVolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleVolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
