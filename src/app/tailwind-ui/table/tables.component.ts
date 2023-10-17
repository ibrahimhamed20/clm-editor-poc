import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  yourPrice: number;
  productNumber: number;
  quantity: string;
  checkbox: string;
  price: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { checkbox: "", yourPrice: 1, price: 5, name: 'Hydrogen', productNumber: 1.0079, quantity: 'H' },
  { checkbox: "", yourPrice: 2, price: 5, name: 'Helium', productNumber: 4.0026, quantity: 'He' },
  { checkbox: "", yourPrice: 3, price: 5, name: 'Lithium', productNumber: 6.941, quantity: 'Li' },
  { checkbox: "", yourPrice: 4, price: 5, name: 'Beryllium', productNumber: 9.0122, quantity: 'Be' },
  { checkbox: "", yourPrice: 5, price: 5, name: 'Boron', productNumber: 10.811, quantity: 'B' },
  { checkbox: "", yourPrice: 6, price: 5, name: 'Carbon', productNumber: 12.0107, quantity: 'C' },
  { checkbox: "", yourPrice: 7, price: 5, name: 'Nitrogen', productNumber: 14.0067, quantity: 'N' },
  { checkbox: "", yourPrice: 8, price: 5, name: 'Oxygen', productNumber: 15.9994, quantity: 'O' },
  { checkbox: "", yourPrice: 9, price: 5, name: 'Fluorine', productNumber: 18.9984, quantity: 'F' },
  { checkbox: "", yourPrice: 10, price: 5, name: 'Neon', productNumber: 20.1797, quantity: 'Ne' },
];
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class tablesComponent implements OnInit {
  displayedColumns: string[] = ['checkboxes', 'productNumber','name' , 'price','yourPrice',  'quantity'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
  }
  @ViewChild(MatSort) sort: MatSort | any;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
