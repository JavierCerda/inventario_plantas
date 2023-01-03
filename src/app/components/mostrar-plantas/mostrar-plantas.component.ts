import { Component } from '@angular/core';
import { Plantas } from './../../mock_plantas';


@Component({
  selector: 'app-mostrar-plantas',
  templateUrl: './mostrar-plantas.component.html',
  styleUrls: ['./mostrar-plantas.component.css']
})
export class MostrarPlantasComponent {
  
  plan=Plantas;

eliminar(posicion:number){
 // delete(this.plan[posicion]);
  let idstr = posicion.toString()
  let id_lin = document.getElementById(idstr);
  id_lin?.remove();
}
resaltar(posicion:number, bu:string){
 // delete(this.plan[posicion]);
  let idstr = posicion.toString()
  let id_lin = document.getElementById(idstr);
  if(id_lin != undefined){
    id_lin.style.backgroundColor = "#38eb4486"; 
   let fav = document.getElementById(bu);
    if (fav != undefined){
      if(fav.innerHTML === "Añadir a favoritos"){
        fav.innerHTML = "Eliminar de favoritos";
      }else{
        fav.innerHTML = "Añadir a favoritos"
        id_lin.style.backgroundColor = " #38eb4400"; 
      }
    }

  }
}
}
