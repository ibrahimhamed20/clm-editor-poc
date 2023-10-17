import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TailwindUIComponent } from './tailwind-ui.component';
import {  tablesComponent } from './table/tables.component';
import { CardsComponent } from './cards/cards.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { OthersComponent } from './others/others.component';

const routes: Routes = [
  {
    path: '', component: TailwindUIComponent, children: [
      { path: 'table', component: tablesComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'others', component: OthersComponent },
      // { path: 'dashboard', component: DashboardComponent },
      // {path:'**',component:}
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TailwindUIRoutingModule { }
