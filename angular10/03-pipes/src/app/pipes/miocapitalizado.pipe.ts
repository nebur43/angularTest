import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miocapitalizado'
})
export class MiocapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean= true): string {
    value = value.toLocaleLowerCase();
    let palabras = value.split(' ');


    if (todas) {
      palabras = palabras.map( nombre => {
        return nombre[0].toUpperCase() + nombre.substr(1);
      });
    } else {
      palabras[0] = palabras[0][0].toUpperCase() + palabras[0].substr(1);
    }

    return palabras.join(' ');
  }

}
