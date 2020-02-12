import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/inferfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  opciones: Observable<Componente[]>;

  constructor(private dataServices: DataService) { }

  ngOnInit() {
    this.opciones = this.dataServices.getOptionsMenu();
  }

}
