import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common'; no hace falta para la creacion del pipe por lo tanto se quita del import
import { FiltroPipe } from './filtro.pipe';



@NgModule({
  declarations: [FiltroPipe],
  imports: [],
  exports:[
    FiltroPipe
  ]
})
export class PipesModule { }
