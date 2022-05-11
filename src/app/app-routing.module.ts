import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { Page1Component } from './components/page1/page1.component';
import { DivisaComponent } from './components/divisa/divisa.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'page1', component: Page1Component },
  { path: 'pelicula', component: PeliculaComponent },
  { path: 'traductor', component: TraductorComponent },
  { path: 'divisa', component: DivisaComponent },
  { path: '**', pathMatch:'full',redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
