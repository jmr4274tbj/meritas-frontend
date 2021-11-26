import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignationMeritasComponent } from './assignation-meritas.component';

describe('AssignationMeritasComponent', () => {
  let component: AssignationMeritasComponent;
  let fixture: ComponentFixture<AssignationMeritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignationMeritasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignationMeritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
