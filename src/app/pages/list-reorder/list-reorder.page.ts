import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  @ViewChild(IonReorderGroup, {static:false}) reorderGroup: IonReorderGroup;

  heroes:string[] = ['Superman', 'Batman', 'Aquaman', 'Joker', 'Flash'];

  constructor() { }

  ngOnInit() {
  }

  doReorder(event:any){
    console.log(event);

    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    const itemMover = this.heroes.splice(event.detail.from, 1)[0];
    this.heroes.splice(event.detail.to, 0, itemMover);

    event.detail.complete();
    console.log(this.heroes);
  }

  setReordenar(){
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

}
