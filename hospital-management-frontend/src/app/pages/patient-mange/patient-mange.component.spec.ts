import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMangeComponent } from './patient-mange.component';

describe('PatientMangeComponent', () => {
  let component: PatientMangeComponent;
  let fixture: ComponentFixture<PatientMangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientMangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientMangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
