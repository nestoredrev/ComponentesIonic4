import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Hero } from 'src/app/interfaces/inferfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  heroes:Hero[] = [];
  ocultar:string;

  constructor(private dataService: DataService, private navCtrl: NavController) { }

  ngOnInit() {
    this.dataService.getHeroes().subscribe( res => {
      this.heroes = res;
    });
  }

  goHome(){
    //permite navigar entre pantallas el navcontroller
    this.ocultar = 'animated fadeOut fast';
    this.navCtrl.navigateBack('/');
  }

}
