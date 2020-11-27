import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ShowWordsComponent } from './components/show-words/show-words.component';
import { ChooseWordsComponent } from './components/choose-words/choose-words.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'component',
    component : ShowWordsComponent
  },
  {
    path: 'choose/:lista',
    component : ChooseWordsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page-palabra/:lista',
    loadChildren: () => import('./page-palabra/page-palabra.module').then( m => m.PagePalabraPageModule)
  },
  {
    path: 'page-score',
    loadChildren: () => import('./page-score/page-score.module').then( m => m.PageScorePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
