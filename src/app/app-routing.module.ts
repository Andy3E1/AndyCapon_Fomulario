import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { Ventana1Component } from './Componentes/ventana1/ventana1.component';
import { Ventana2Component } from './Componentes/ventana2/ventana2.component';
import { Ventana3Component } from './Componentes/ventana3/ventana3.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'web1', component: Ventana1Component },
  {path:'volver', component: HomeComponent },
  {path:'web2', component: Ventana2Component},
  {path:'web3', component: Ventana3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
