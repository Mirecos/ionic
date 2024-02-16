import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Musique } from './models/Musique.model';

@Injectable({
  providedIn: 'root'
})
export class MusiqueService {
  private dbPath = '/musique';
  MusiquesRef: AngularFirestoreCollection<Musique>;


  constructor(
    private db: AngularFirestore
  ) { 
    this.MusiquesRef = db.collection(this.dbPath);
  }

  getAll() : any {
    return this.MusiquesRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewMusique(Musique: Musique) : any {
    return new Observable(obs => {
      this.MusiquesRef.add({...Musique}).then(() => {
        obs.next();
      });
    });
  }

  get(id: any):any {
    return  new Observable(obs => {
      this.MusiquesRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(Musique:Musique) {
    return new Observable(obs => {
      this.MusiquesRef.doc(Musique.id).update(Musique);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`musique/${id}`).delete();
  }
}
