import { Component } from '@angular/core';
import {moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.scss'],

})
export class TemplateDetailsComponent {
  constructor(){}

  testData = `<div id="clause_container" data-elment="10">
  <ol id="main_clause" class="main_clause">
    <li class="main_clause_li" value="">test clause title<a></a></li>
    <ol id="main_clause_sub"><li id="main_clause_li_sub">Dummy</li></ol>
  </ol>
  </div>`

  clauses = [
    {id:1,content: this.testData ,active:true},
    {id:2,content: this.testData ,active:false},
    {id:3,content: this.testData ,active:false},
    {id:4,content: this.testData ,active:false},
    {id:5,content: this.testData ,active:false},
    {id:6,content: this.testData ,active:false},
    {id:7,content: this.testData ,active:false},
    {id:8,content:this.testData ,active:false},
  ];

  drop(event:any) {
    console.log(event)
    moveItemInArray(this.clauses, event.previousIndex, event.currentIndex);
  }

}
