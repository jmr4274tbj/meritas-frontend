import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportationDonneesComponent } from './importation-donnees.component';

describe('ImportationDonneesComponent', () => {
  let component: ImportationDonneesComponent;
  let fixture: ComponentFixture<ImportationDonneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportationDonneesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportationDonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
