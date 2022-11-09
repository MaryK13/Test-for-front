import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';

const routes: Routes = [
  {
    path: '',
    component: SummaryPageComponent
  },
  {
    path: 'navigator',
    component: ListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
