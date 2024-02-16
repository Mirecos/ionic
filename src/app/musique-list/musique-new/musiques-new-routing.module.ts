import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusiqueNewPage } from './musiques-new.page';

const routes: Routes = [
  {
    path: '',
    component: MusiqueNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusiqueNewPageRoutingModule {}
