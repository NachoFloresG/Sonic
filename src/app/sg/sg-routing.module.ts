import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SGPage } from './sg.page';

const routes: Routes = [
  {
    path: '',
    component: SGPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SGPageRoutingModule {}
