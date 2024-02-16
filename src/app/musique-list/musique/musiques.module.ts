import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusiquePageRoutingModule } from './musiques-routing.module';

import { MusiquePage } from './musiques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusiquePageRoutingModule
  ],
  declarations: [MusiquePage]
})
export class MusiquePageModule {}
