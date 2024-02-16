import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusiqueNewPageRoutingModule } from './musiques-new-routing.module';

import { MusiqueNewPage } from './musiques-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusiqueNewPageRoutingModule
  ],
  declarations: [MusiqueNewPage]
})
export class MusiqueNewPageModule {}
