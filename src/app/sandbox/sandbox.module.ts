import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SandboxRoutingModule } from './sandbox-routing.module';
import { SandboxComponent } from './sandbox.component';
import { SharedModule } from '../shared/shared.module';
import { TablesComponent } from './components/tables/tables.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FormsComponent } from './components/forms/forms.component';


@NgModule({
  declarations: [
    SandboxComponent,
    TablesComponent,
    ButtonsComponent,
    FormsComponent
  ],
  imports: [
    CommonModule,
    SandboxRoutingModule,
    SharedModule
  ]
})
export class SandboxModule { }
