import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SGPageRoutingModule } from './sg-routing.module';

import { SGPage } from './sg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SGPageRoutingModule
  ],
  declarations: [SGPage]
})
export class SGPageModule {}
