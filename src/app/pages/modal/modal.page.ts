import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps:{
        nombre: 'Nestor Edrev',
        pais: 'bulgaria'
      }
    });
    
    await modal.present();

    //promesa que escucha cuando el modal se cierra
    const { data } = await modal.onDidDismiss();
    console.log('Retorno del modal', data);

  }

}
