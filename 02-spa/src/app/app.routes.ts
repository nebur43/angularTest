import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';


export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'heroes', component: HeroesComponent },
    {path: 'heroe/:id', component: HeroeComponent },
    {path: 'about', component: AboutComponent },
    {path: 'search/:str', component: BusquedaComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];



