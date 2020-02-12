import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfiteScrollPageRoutingModule } from './infite-scroll-routing.module';

import { InfiteScrollPage } from './infite-scroll.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfiteScrollPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfiteScrollPage]
})
export class InfiteScrollPageModule {}
