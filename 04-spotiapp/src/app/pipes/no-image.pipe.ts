import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: any[]): string {

    if ( value == null || value.length == 0) {
      return 'assets/img/no-image-300x300.png';
    } else {
      return value[0].url;
    }


  }

}
