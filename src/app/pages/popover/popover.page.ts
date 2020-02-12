import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPopover(evento:any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      event: evento,
      mode: 'ios', // para que salga la flechita del popovermore
      backdropDismiss: true // el menu de more desaparece al pinchar fuera
    });
    await popover.present();
    //const { data } = await popover.onDidDismiss(); // Se espera a desaparecer totalmente el menu de popover
    const { data } = await popover.onWillDismiss(); // devuelve la data instantanea mente y no se espera al evento de cerrar el menu de popover
    console.log('Padre: ', data);
  }

}
