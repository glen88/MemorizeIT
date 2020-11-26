import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowWordsComponent } from './show-words/show-words.component';
import { ChooseWordsComponent } from './choose-words/choose-words.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    ShowWordsComponent
  ],
  declarations: [ShowWordsComponent, ChooseWordsComponent]
})
export class ComponentModule { }
