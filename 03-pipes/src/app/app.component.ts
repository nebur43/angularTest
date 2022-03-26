import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Capitán América';
  nombre2 = 'ruBeN AGUado pErEz';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  porcentaje = 0.236333;
  salario = 1234.5;
  fecha = new Date();
  idioma = 'fr';
  videoUrl = 'https://www.youtube.com/embed/ap-BkkrRg-o?start=6485';
  activar = true;

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('llego los datos');
    }, 4500);
  } );

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 40
    }
  };


}
