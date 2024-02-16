import { Component, OnInit } from '@angular/core';
import { Musique } from '../models/Musique.model';
import { MusiqueService } from '../musiques.service';

@Component({
  selector: 'app-musiques-list',
  templateUrl: './musiques-list.page.html',
})
export class MusiquesListPage implements OnInit {
  Musiques!: Array<Musique>;

  constructor(
    private Musique: MusiqueService
  ) { }

  ngOnInit() {
    this.Musique.getAll().subscribe((data: any) => {
      this.Musiques = data;
    });
  }

}
