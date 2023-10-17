import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClausesRoutingModule } from './clauses-routing.module';
import { ClausesListingComponent } from './components/clauses-listing/clauses-listing.component';
import { AddNewClauseComponent } from './components/add-new-clause/add-new-clause.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from '../shared/editor/editor.component';


@NgModule({
  declarations: [
    ClausesListingComponent,
    AddNewClauseComponent
  ],
  imports: [
    CommonModule,
    ClausesRoutingModule,
    SharedModule,
    EditorComponent
    // FormsModule,
    // ReactiveFormsModule
  ]
})
export class ClausesModule { }
