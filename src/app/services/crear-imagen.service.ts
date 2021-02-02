import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {destTuristico} from '../model/destTuristico'; 

@Injectable({
  providedIn: 'root'
})
export class CrearImagenService {

  constructor(public afs: AngularFirestore) { }

  saveImagen(imagen: destTuristico){
    const refImagen = this.afs.collection("imagenes");
    if (imagen.tid ==  null) {
      imagen.tid = this.afs.createId();
      imagen.delated = false;
    }

    refImagen.doc(imagen.tid).set(Object.assign({},imagen), {merge: true})
  }

  getImagenes(): Observable<any[]>{
    return this.afs.collection("imagenes").valueChanges();
  }
}
