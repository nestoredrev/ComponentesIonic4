import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci:  Date = new Date();
  customDate: Date = new Date();

  customPickerOptions:any;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Guardar',
        handler: (evento) => {
          console.log('Clicked Save!');
          console.log(evento);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  seleccionarFecha(event){
    console.log('La fecha es: ',event.detail.value);
    console.log('to fecha JS: ', new Date(event.detail.value));
  }

}
