import {Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensaje: 'Un gran poder requiere de una gran responsabilidad',
        autor: 'Peter Parker'
    };

    personajes: string[] = ['Spiderman', 'Venom', 'Hulk'];

}
