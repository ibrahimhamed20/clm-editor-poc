import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesComponent } from './templates.component';
import { TemplateDetailsComponent } from './template-details/template-details.component';
import { EditorCommentsComponent } from './editor-comments/editor-comments.component';

const routes: Routes = [
  {
    path: '',
    component: TemplatesComponent
  },
  {
    path: 'details',
    component: TemplateDetailsComponent
  },
  {
    path: 'comments',
    component: EditorCommentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
