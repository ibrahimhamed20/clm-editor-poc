import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TailwindUIRoutingModule } from './tailwind-ui-routing.module';
import { TailwindUIComponent } from './tailwind-ui.component';
import { tablesComponent } from './table/tables.component';
import { CardsComponent } from './cards/cards.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../shared/material';
import { FormsComponent } from './forms/forms.component';
import { OthersComponent } from './others/others.component';
import { GovDocsComponent } from './gov-docs/gov-docs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    TailwindUIComponent,
    tablesComponent,
    FormsComponent,
    CardsComponent,
    OthersComponent,
    GovDocsComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    TailwindUIRoutingModule,
    MaterialModule
  ]
})
export class TailwindUIModule { }
