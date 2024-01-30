import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildDataComponent } from './components/child-data/child-data.component';
import { DirectivesComponent } from './components/directives-atribute/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EmmiterComponent } from './components/emmiter/emmiter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { DiretivasComponent } from './pages/diretivas/diretivas.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import { DiretivasEstruturaisComponent } from './pages/diretivas-estruturais/diretivas-estruturais.component';
import { OutputComponent } from './pages/output/output.component';
import { TwpWayComponent } from './pages/twp-way/twp-way.component';
import { RequisicaoComponent } from './components/requisicao/requisicao.component'
import {HttpClientModule} from '@angular/common/http';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { FormDataComponent } from './components/form-data/form-data.component'



@NgModule({
  declarations: [
    AppComponent,
    ChildDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EmmiterComponent,
    ChangeNumberComponent,
    ParentDataComponent,
    ListRenderComponent,
    TwoWayBindingComponent,
    DiretivasComponent,
    HomePageComponent,
    DiretivasEstruturaisComponent,
    OutputComponent,
    TwpWayComponent,
    RequisicaoComponent,
    ItemDetailsComponent,
    FormularioComponent,
    FormDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
