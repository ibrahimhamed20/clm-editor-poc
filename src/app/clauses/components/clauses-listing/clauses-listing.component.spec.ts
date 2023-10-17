import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClausesListingComponent } from './clauses-listing.component';

describe('ClausesListingComponent', () => {
  let component: ClausesListingComponent;
  let fixture: ComponentFixture<ClausesListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClausesListingComponent]
    });
    fixture = TestBed.createComponent(ClausesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
