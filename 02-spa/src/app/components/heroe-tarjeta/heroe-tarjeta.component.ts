import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IHeroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input()
  heroe: IHeroe;

  @Input()
  index: number;

  @Output()
  heroeSeleccionado: EventEmitter<number>;

  constructor(private route: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(): void {
    // this.route.navigate(['/heroe', this.index] );
    this.heroeSeleccionado.emit(this.index);
  }

}
