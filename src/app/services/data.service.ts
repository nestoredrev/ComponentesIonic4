import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators'; // observadores de filtracion de los datos
import { Componente, Hero } from '../interfaces/inferfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get('http://www.omdbapi.com/?apikey=c9a2335c&s=batman')
                    .pipe( map (response => response['Search']));
  }

  getUsers(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  getOptionsMenu(){
    return this.http.get<Componente[]>('/assets/data/menuOptions.json');
  }

  getHeroes(){
    return this.http.get<Hero[]>('/assets/data/heroes.json')
            .pipe(
              delay(3000)
            );
  }
  
}
