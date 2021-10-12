import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'instrumentos',
    loadChildren: () => import('./instrumentos/instrumentos.module').then( m => m.InstrumentosPageModule)
  },
  {
    path: 'guitarras',
    loadChildren: () => import('./guitarras/guitarras.module').then( m => m.GuitarrasPageModule)
  },  {
    path: 'sg',
    loadChildren: () => import('./sg/sg.module').then( m => m.SGPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
