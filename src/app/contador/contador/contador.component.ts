import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
<h1>{{titulo}}</h1>
<h2>la base es <strong>{{base}}</strong></h2>

<button (click)="acumular(base)">+{{base}}</button>
<label >{{Numero}}</label>

<button (click)="acumular(-base)">-{{base}}</button>
    
    
    `
})
export class ContadorComponent {

    titulo: string = ' primera clase 01-bases';
  Numero: number = 10;
  base: number = 5;
  acumular( valor: number){
    this.Numero += valor;
  }
}