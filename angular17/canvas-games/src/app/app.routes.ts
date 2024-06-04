import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'serpiente',
        loadComponent: () => import('./games/serpiente/serpiente.component').then(m => ({ default: m.SerpienteComponent }))
    },
    {
        path: 'mariobross',
        loadComponent: () => import('./games/mariobross/mariobross.component').then(m => ({ default: m.MariobrossComponent }))
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
