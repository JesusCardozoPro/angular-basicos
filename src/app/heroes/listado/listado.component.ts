import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

heroes = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
BorradosH: string="";

borrarHeroe(){
  // return this.heroes = this.heroes.slice(0,this.heroes.length -1);
  
  
  this.BorradosH = this.heroes.shift() || "";
  // let heroesBorradoTT = [];
  // heroesBorradoTT.push(BorradosH);
  // console.log(heroesBorradoTT);
}

}


