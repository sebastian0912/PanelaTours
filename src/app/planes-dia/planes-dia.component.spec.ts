import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesDiaComponent } from './planes-dia.component';

describe('PlanesDiaComponent', () => {
  let component: PlanesDiaComponent;
  let fixture: ComponentFixture<PlanesDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanesDiaComponent]
    });
    fixture = TestBed.createComponent(PlanesDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
