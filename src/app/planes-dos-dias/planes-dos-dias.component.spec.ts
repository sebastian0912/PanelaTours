import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesDosDiasComponent } from './planes-dos-dias.component';

describe('PlanesDosDiasComponent', () => {
  let component: PlanesDosDiasComponent;
  let fixture: ComponentFixture<PlanesDosDiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanesDosDiasComponent]
    });
    fixture = TestBed.createComponent(PlanesDosDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
