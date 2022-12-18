import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { Ventana1Component } from './Componentes/ventana1/ventana1.component';
import { Ventana2Component } from './Componentes/ventana2/ventana2.component';
import { Ventana3Component } from './Componentes/ventana3/ventana3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Ventana1Component,
    Ventana2Component,
    Ventana3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
