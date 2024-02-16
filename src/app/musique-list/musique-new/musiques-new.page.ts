import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MusiqueService } from 'src/app/musiques.service';
import { Musique } from 'src/app/models/Musique.model';

@Component({
  selector: 'app-musique-new',
  templateUrl: './musiques-new.page.html',
})
export class MusiqueNewPage implements OnInit {
  public musique!: Musique;

  constructor(
    private Musique: MusiqueService,
    private toastCtrl: ToastController,
    private router : Router
  ) { }

  ngOnInit() {
    this.musique = new Musique();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Musique enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/Musiques']);
      }, 2000);
    });
  }

  add() {
    this.Musique.saveNewMusique(this.musique).subscribe(() => {
      this.musique = new Musique();
      this.presentToast();
    });
  }
}
