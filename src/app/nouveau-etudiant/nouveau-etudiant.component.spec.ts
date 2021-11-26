import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauEtudiantComponent } from './nouveau-etudiant.component';

describe('NouveauEtudiantComponent', () => {
  let component: NouveauEtudiantComponent;
  let fixture: ComponentFixture<NouveauEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
