import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    //la ruta por defecto si no se especifica ninguna ruta en concreto
    path: '',
    redirectTo: 'account',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'account',
        //ambas lineas son correctas para el lazyload
        //loadChildren: () => import('../avatar/avatar.module').then( m => m.AvatarPageModule)
        loadChildren: '../avatar/avatar.module#AvatarPageModule'
      },
      {
        path:'contact',
        //loadChildren: () => import('../list/list.module').then( m => m.ListPageModule)
        loadChildren: '../list/list.module#ListPageModule'
      },
      {
        path:'settings',
        //loadChildren: () => import('../infite-scroll/infite-scroll.module').then( m => m.InfiteScrollPageModule)
        loadChildren: '../infite-scroll/infite-scroll.module#InfiteScrollPageModule'
      }
    ]
  },
  { path: '**', redirectTo: 'account' } //redireccion en caso de que la ruta es erronea
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
