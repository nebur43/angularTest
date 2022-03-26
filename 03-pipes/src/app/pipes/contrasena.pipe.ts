import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activado: boolean = true): unknown {
    if (activado) {
      return '*'.repeat(value.length);
    }
    
    return value;
  }

}
