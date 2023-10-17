import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewClauseComponent } from '../add-new-clause/add-new-clause.component';

@Component({
  selector: 'app-clauses-listing',
  templateUrl: './clauses-listing.component.html',
  styleUrls: ['./clauses-listing.component.scss']
})
export class ClausesListingComponent implements OnInit {

  creatorPlaceholder = {
    name: ' Muhammad Ragab',
    email: 'mrhussein.c@stc.com.sa'
  }

  clausesList: any[] = [];

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    const DATA = JSON.parse(localStorage.getItem('CLM_CLAUSES') as string);
    if (DATA) {
      this.clausesList = [...DATA];
    }
  }

  onAddNewClause(clause?: any, MODE: 'ADD' | 'EDIT' = 'ADD'): void {
    const REF = this.dialog.open(AddNewClauseComponent, {
      data: MODE === 'EDIT' ? clause : null,
      width: "950px",
      disableClose: true
    });
    REF.afterClosed().subscribe((res) => {
      if (res?.clause) {
        if (MODE === 'ADD') {
          res.clause = {
            ...res?.clause,
            version: '1.1',
            creator: this.creatorPlaceholder,
            creationDate: new Date().toDateString(),
            status: 'approved',
            id: new Date().getMilliseconds()
          };
          this.clausesList = [res?.clause, ...this.clausesList];
        } else if (MODE === 'EDIT') {
          Object.assign(clause, res?.clause);
        }

        localStorage.setItem('CLM_CLAUSES', JSON.stringify(this.clausesList));
      }
    });
  }

  onEditClause(clause: any): void {
    this.onAddNewClause(clause, 'EDIT');
  }

  onDeleteClause(clause: any): void {
    const NDX = this.clausesList.findIndex(item => item?.id === clause?.id);
    if (NDX > -1) {
      this.clausesList.splice(NDX, 1);
    }
    localStorage.setItem('CLM_CLAUSES', JSON.stringify(this.clausesList));
  }
}
