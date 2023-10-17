import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  { path: 'templates', loadChildren: () => import('src/app/templates/templates.module').then(m => m.TemplatesModule) },
  { path: 'sandbox', loadChildren: () => import('./sandbox/sandbox.module').then(m => m.SandboxModule) },
  { path: 'tailwind-UI', loadChildren: () => import('./tailwind-ui/tailwind-ui.module').then(m => m.TailwindUIModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
