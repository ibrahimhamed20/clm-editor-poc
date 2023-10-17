import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClausesListingComponent } from './components/clauses-listing/clauses-listing.component';

const routes: Routes = [
  { path: '', component: ClausesListingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClausesRoutingModule { }
