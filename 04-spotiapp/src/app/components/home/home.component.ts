import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  nuevasCanciones: any[] = [];

  loading: boolean;

  error = false;

  mensajeError: string;

  constructor(private spotify:SpotifyService) {
    
    this.loading = true;

    this.spotify.getNewReleases().subscribe( data => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, errorData => {
      this.loading = false;
      this.error = true;
      this.mensajeError = errorData['error']['error']['message'];
      console.log(errorData);
      
    });
        
        
   }


}
