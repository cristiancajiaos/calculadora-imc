import { Routes } from '@angular/router';
import { Calculator } from './views/calculator/calculator';

export const routes: Routes = [
  {path: 'calculator', component: Calculator, pathMatch: 'full'},
  {path: '**', redirectTo: '/calculator', pathMatch: 'full'}
];
