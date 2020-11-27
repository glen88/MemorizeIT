import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageScorePage } from './page-score.page';

const routes: Routes = [
  {
    path: '',
    component: PageScorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageScorePageRoutingModule {}
