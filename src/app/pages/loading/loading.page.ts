import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading:any;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
    
    this.presentLoading();

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);

  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      message: 'Cargando...'
    });
    return this.loading.present();
  }


}
