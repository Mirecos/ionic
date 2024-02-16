import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { MusiqueService } from 'src/app/musiques.service';
import { Musique } from 'src/app/models/Musique.model';

@Component({
  selector: 'app-musique',
  templateUrl: './musiques.page.html',
  styleUrls: ['./musiques.page.scss'],
})
export class MusiquePage implements OnInit {
  modif: boolean = false;
  musique!: Musique;

  constructor(
    private alertCtrl : AlertController,
    private route: ActivatedRoute,
    private Musique: MusiqueService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.Musique.get(id).subscribe((value: any) => {
      this.musique = value;
    });
  }

  async setModif() {
    if(!this.modif) {
      const alert = await this.alertCtrl.create({
        header : 'Etes vous sur de vouloir modifier ?',
        subHeader: 'Vous rendrez possible la modification',
        buttons : [
          {
            text: 'Annuler',
            role: 'Cancel'
          }, {
            text: 'Configurer',
            handler: () => {this.modif = !this.modif}
          }
        ]
      });
      await alert.present();
    } else {
      this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000
    });
    (await toast).present();
  }

  onModif() {
    this.Musique.update(this.musique).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  onDelete(id: any) {
    this.Musique.delete(id);
    this.router.navigate(['/Musiques']);
  }
}
