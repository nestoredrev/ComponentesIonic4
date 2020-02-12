import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  miTitulo:string;

  constructor(private alertCntrl: AlertController) { }



  ngOnInit() {
  }

  async mostrarAlerta() {
    const alert = await this.alertCntrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async mostrarAlertaInput() {
    const input = await this.alertCntrl.create({
      header: 'Modificar titulo',
      inputs: [
        {
          name: 'nuevoTitulo',
          type: 'text',
          placeholder: 'Escribir nuevo titulo...'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Modificar',
          handler: (data) => {
            console.log('Confirm Okay: ',data);
            this.miTitulo = data.nuevoTitulo;
          }
        }
      ]
    });

    await input.present();
  }

  

}
