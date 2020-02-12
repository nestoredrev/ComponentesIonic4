import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  movies:any;

  constructor(private movieServices: DataService) {
    
    this.movieServices.getMovies().subscribe(res => this.movies = res);
    
  }

  ngOnInit() {
  }

}
