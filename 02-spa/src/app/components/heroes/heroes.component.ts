import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, IHeroe } from '../../servicios/heroes.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: IHeroe[] = [];

  constructor( private heroesService: HeroesService, private router: Router ) {

  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  verHeroe(idx: number): void {
    this.router.navigate( ['/heroe', idx] );
  }

}
