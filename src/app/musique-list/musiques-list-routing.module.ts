import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusiquesListPage } from './musiques-list.page';

const routes: Routes = [
  {
    path: '',
    component: MusiquesListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./musique-new/musiques-new.module').then( m => m.MusiqueNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./musique/musiques.module').then( m => m.MusiquePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusiquesListPageRoutingModule {}
