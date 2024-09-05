import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./vistas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'base',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./vistas/registro/registro.module').then( m => m.RegistroPageModule)
  },{
    path: 'base',
    loadChildren: () => import('./vistas/base/base.module').then( m => m.BasePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
