import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  users:any[] = [];
  textoBuscar:string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(res => this.users = res);
  }

  onSearchChange(evento:any){
    this.textoBuscar = evento.detail.value;
  }

}
