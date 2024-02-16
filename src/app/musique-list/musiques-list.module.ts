import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusiquesListPageRoutingModule } from './musiques-list-routing.module';

import { MusiquesListPage } from './musiques-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusiquesListPageRoutingModule
  ],
  declarations: [MusiquesListPage]
})
export class MusiquesListPageModule {}
