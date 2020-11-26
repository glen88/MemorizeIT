import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagePalabraPageRoutingModule } from './page-palabra-routing.module';

import { PagePalabraPage } from './page-palabra.page';
import { ComponentModule } from '../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagePalabraPageRoutingModule,
    ComponentModule
  ],
  declarations: [PagePalabraPage]
})
export class PagePalabraPageModule {}
