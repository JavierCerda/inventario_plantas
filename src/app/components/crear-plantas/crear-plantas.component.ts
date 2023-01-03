import { Component, Input } from '@angular/core';
import { Planta } from '../../plan';
import { Plantas } from './../../mock_plantas';

@Component({
  selector: 'app-crear-plantas',
  templateUrl: './crear-plantas.component.html',
  styleUrls: ['./crear-plantas.component.css']
})
export class CrearPlantasComponent {
  crear:Planta={nombre: "", tipo: ""};
  constructor( ){ };
  submit(){
    if(this.crear.nombre.length != 0 || this.crear.nombre.length != null){
      if(document.querySelector('input[name="tipo"]:checked')){
      
      
        console.log("creado");
        Plantas.push({nombre: this.crear.nombre,tipo: this.crear.tipo})
      }else{
      console.log("tienes que escoger un tipo de planta")
      }
    }else{
    console.log("El nombre es un campo obligatorio")
    }  
  }
}
