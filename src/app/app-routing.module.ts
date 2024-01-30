import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DiretivasComponent } from './pages/diretivas/diretivas.component';
import { DiretivasEstruturaisComponent } from './pages/diretivas-estruturais/diretivas-estruturais.component';
import { OutputComponent } from './pages/output/output.component';
import { TwpWayComponent } from './pages/twp-way/twp-way.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { FormularioComponent } from './pages/formulario/formulario.component';


const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: "full"},
  {path: 'diretivas', component: DiretivasComponent },
  {path: 'diretivas-estruturais', component: DiretivasEstruturaisComponent},
  {path: 'diretivas-estruturais/:id', component:ItemDetailsComponent},
  {path: 'output', component: OutputComponent},
  {path: 'two-way', component: TwpWayComponent},
  {path: 'formulario', component: FormularioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
