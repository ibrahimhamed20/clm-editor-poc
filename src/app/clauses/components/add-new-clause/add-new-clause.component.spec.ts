import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewClauseComponent } from './add-new-clause.component';

describe('AddNewClauseComponent', () => {
  let component: AddNewClauseComponent;
  let fixture: ComponentFixture<AddNewClauseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewClauseComponent]
    });
    fixture = TestBed.createComponent(AddNewClauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
