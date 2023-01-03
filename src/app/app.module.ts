import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MostrarPlantasComponent } from './components/mostrar-plantas/mostrar-plantas.component';
import { CrearPlantasComponent } from './components/crear-plantas/crear-plantas.component';


@NgModule({
  declarations: [
    AppComponent,
    MostrarPlantasComponent,
    CrearPlantasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
