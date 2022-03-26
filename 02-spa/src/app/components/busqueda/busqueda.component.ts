import { Component, OnInit } from '@angular/core';
import { HeroesService, IHeroe } from '../../servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {
  busq: IHeroe[] = [];
  strBusqueda: string;
  constructor(private heroesService: HeroesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.busq = this.heroesService.buscarHeroe(params.str);
      this.strBusqueda = params.str;
    } );
  }

  getHeroeIdxReal(idx: number): string {
    return this.heroesService.getHeroeIdx(this.busq[idx].nombre);
  }

  verHeroe(idx: string): void {
    this.router.navigate(['/heroe', idx]);
  }

}
