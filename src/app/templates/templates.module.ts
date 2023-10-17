import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './components/templates-routing.module';
import { TemplatesComponent } from './components/templates.component';
import { TemplateDetailsComponent } from './components/template-details/template-details.component';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { SharedModule } from '../shared/shared.module';
import { EditorComponent } from '../shared/editor/editor.component';
import { EditorCommentsComponent } from './components/editor-comments/editor-comments.component';
import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [
    TemplatesComponent,
    TemplateDetailsComponent,
    EditorCommentsComponent
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    SharedModule,
    EditorModule,
    EditorComponent,
    DragDropModule
  ]
})
export class TemplatesModule { }
