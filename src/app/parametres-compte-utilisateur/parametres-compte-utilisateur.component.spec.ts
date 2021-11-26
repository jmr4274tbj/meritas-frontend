import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametresCompteUtilisateurComponent } from './parametres-compte-utilisateur.component';

describe('ParametresCompteUtilisateurComponent', () => {
  let component: ParametresCompteUtilisateurComponent;
  let fixture: ComponentFixture<ParametresCompteUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametresCompteUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametresCompteUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
