import { UpperCasePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHeroe, HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe: IHeroe ;
  iconoCasa: string;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private location: Location) {

    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroesService.getHeroe(params.id);
      if ( 'DC' === this.heroe.casa) {
        this.iconoCasa = 'assets/img/dc.png';
      }
      if ( 'Marvel' === this.heroe.casa) {
        this.iconoCasa = '/assets/img/marvel.png';
      }

    } );

   }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back();
  }

}
