import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infite-scroll',
  templateUrl: './infite-scroll.page.html',
  styleUrls: ['./infite-scroll.page.scss'],
})
export class InfiteScrollPage implements OnInit {

  //Acceder a las propiedades de la etiqueta de Ionic ion-infinite-scroll
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll; 

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event:any){
    console.log('Cargo los siguientes datos...');

    setTimeout(() => {

      if(this.data.length > 50)
      {
        event.target.complete();
        //Elimina la etiqueta html una vez completa la lista de datos
        this.infiniteScroll.disabled = true;
        return;
      }

      const nuevoArray = Array(20);
      //spread operator 
      this.data.push( ...nuevoArray );
      event.target.complete();
    }, 1000);

  }

}
