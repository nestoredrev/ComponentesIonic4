import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/interfaces/inferfaces';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;
  
  constructor(private dataServices: DataService) { }

  ngOnInit() {
    this.componentes = this.dataServices.getOptionsMenu();
  }

}
