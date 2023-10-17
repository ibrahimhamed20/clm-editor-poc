import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gov-docs',
  templateUrl: './gov-docs.component.html',
  styleUrls: ['./gov-docs.component.scss']
})
export class GovDocsComponent implements OnInit {
  movies = [
    'The Phantom Menace',
    'Attack of the Clones',
    'Revenge of the Sith',
    'A New Hope',
    'The Empire Strikes Back',
    'Return of the Jedi',
    'The Force Awakens',
    'The Last Jedi',
    'The Rise of Skywalker',
  ];
  @ViewChild('requestDialog', { static: true }) requestDialog: ElementRef | any;
  @ViewChild('sideNav', { static: true }) sideNav: ElementRef | any;
  @ViewChild('addMatrix', { static: true }) addMatrix: ElementRef | any;
  panelOpenState = false;
  isExpanded = true;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(this.requestDialog, {
      width: '750px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }


  openSideNav(): void {
    const dialogRef = this.dialog.open(this.sideNav, {
      width: '470px',
      panelClass: 'sideNav',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  openAddMatrix(): void {
    const dialogRef = this.dialog.open(this.addMatrix, {
      width: '470px',
      panelClass: 'sideNav',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
