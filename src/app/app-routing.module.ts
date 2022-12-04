import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HomeComponent } from './components/home/home.component';
import { PersonasComponent } from './components/personas/personas.component';
//importar los copmponentes que queremos visualizar
//home
//heroe
//buscador
//navbar

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'heroes' , component:HeroeComponent},
  {path:'buscador' , component:BuscadorComponent},
  {path:'buscar/:termino', component:BuscadorComponent},
  {path:'personas', component:PersonasComponent},

  {path:'**', pathMatch:'full', redirectTo:'home'}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
