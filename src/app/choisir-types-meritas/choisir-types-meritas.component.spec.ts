/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChoisirTypesMeritasComponent } from './choisir-types-meritas.component';

describe('ChoisirTypesMeritasComponent', () => {
  let component: ChoisirTypesMeritasComponent;
  let fixture: ComponentFixture<ChoisirTypesMeritasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoisirTypesMeritasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoisirTypesMeritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
