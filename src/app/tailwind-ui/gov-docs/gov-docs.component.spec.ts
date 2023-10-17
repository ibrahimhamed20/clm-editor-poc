/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GovDocsComponent } from './gov-docs.component';

describe('GovDocsComponent', () => {
  let component: GovDocsComponent;
  let fixture: ComponentFixture<GovDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
