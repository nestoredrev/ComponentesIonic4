import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfiteScrollPage } from './infite-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: InfiteScrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfiteScrollPageRoutingModule {}
