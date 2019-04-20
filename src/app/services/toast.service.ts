import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastCtrl : ToastController){ }

  async presentToast(header, message) {
    const toast = await this.toastCtrl.create({
      header: header,
      message: message,
      duration: 2000
    });
    toast.present();
  }
}