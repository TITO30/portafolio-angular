import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route , RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { FormacionComponent } from './formacion/formacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    QuienSoyComponent,
    FormacionComponent,
    ExperienciaComponent,
    HabilidadesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
