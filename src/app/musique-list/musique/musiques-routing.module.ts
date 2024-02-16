import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusiquePage } from './musiques.page';

const routes: Routes = [
  {
    path: '',
    component: MusiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusiquePageRoutingModule {}
