import { Routes } from '@angular/router';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';
import { ParentComponent } from './parent/parent.component';

export const routes: Routes = [
  { path: '', redirectTo: 'page-a', pathMatch: 'full' },
  { path: 'page-a', component: PageAComponent },
  { path: 'page-b', component: PageBComponent },
  { path: 'parent', component: ParentComponent },
];
