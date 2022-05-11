import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { Page1Component } from './components/page1/page1.component';
import { DivisaComponent } from './components/divisa/divisa.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { NavComponent } from './components/layouts/nav/nav.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaComponent,
    Page1Component,
    DivisaComponent,
    TraductorComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
