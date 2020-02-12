import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Hero } from 'src/app/interfaces/inferfaces';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, {static:true}) segment: IonSegment; 
  heroes: Hero[] = [];
  segmentSelected:string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos'; //Incializar los botones del segmento
    this.dataService.getHeroes().subscribe(res => {
      this.heroes = res;
    });
  }

  segmentChanged(evento:any){
    
    this.segmentSelected = evento.target.value;
    if( this.segmentSelected === 'todos' )
    {
      this.segmentSelected = '';
    }

  }

}
