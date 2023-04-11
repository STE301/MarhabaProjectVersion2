import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideFixComponent } from './aside-fix.component';

describe('AsideFixComponent', () => {
  let component: AsideFixComponent;
  let fixture: ComponentFixture<AsideFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideFixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
