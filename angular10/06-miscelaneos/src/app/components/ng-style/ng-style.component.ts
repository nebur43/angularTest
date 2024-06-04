import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <h2>Ejemplos <small>ngStyle</small></h2>
    <p [style.fontSize.px]="tamano">
      Hola mundo... esta es una etiqueta (tamaño = {{tamano}})
    </p>
    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
    

  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano: number = 15;

  constructor() { }

  ngOnInit(): void {
  }

}
