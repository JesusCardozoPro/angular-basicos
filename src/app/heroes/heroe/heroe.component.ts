import {Component} from '@angular/core';




@Component({
    selector:'app-heroe',
    templateUrl:'./heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Iron Man';
    edad: number = 40;
    
    obtenerNombre(): string {
        return ` ${this.nombre} - ${this.edad}`
    }

    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }

    cambiarNombre(){
        return this.nombre = 'Spiderman';
    }
    cambiarEdad(){
        return this.edad = 32;
    }


}