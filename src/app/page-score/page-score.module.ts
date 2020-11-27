import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageScorePageRoutingModule } from './page-score-routing.module';

import { PageScorePage } from './page-score.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageScorePageRoutingModule
  ],
  declarations: [PageScorePage]
})
export class PageScorePageModule {}
