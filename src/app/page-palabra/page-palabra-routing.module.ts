import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagePalabraPage } from './page-palabra.page';

const routes: Routes = [
  {
    path: '',
    component: PagePalabraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagePalabraPageRoutingModule {}
