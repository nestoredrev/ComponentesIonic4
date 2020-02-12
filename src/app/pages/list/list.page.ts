import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios:any;
  @ViewChild(IonList,{static:false}) ionlist: IonList;

  constructor(private dataService: DataService,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe( respuesta => this.usuarios = respuesta );
  }

  async presentToast(mensaje:string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }


  favorite( user ){
    console.log('favorite', user);
    this.presentToast('Favorito!!!!');
    this.ionlist.closeSlidingItems();
  }

  share( user ){
    console.log('share', user);
    this.presentToast('Compartido!!!!');
    this.ionlist.closeSlidingItems();
  }

  borrar( user ){
    console.log('borrar', user);
    this.presentToast('Borrado!!!!');
    this.ionlist.closeSlidingItems();
  }

}
