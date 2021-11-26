/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AfficherGroupesCoursUtilisateurComponent } from './afficher-groupes-cours-utilisateur.component';

describe('AfficherGroupesCoursUtilisateurComponent', () => {
  let component: AfficherGroupesCoursUtilisateurComponent;
  let fixture: ComponentFixture<AfficherGroupesCoursUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherGroupesCoursUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherGroupesCoursUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
