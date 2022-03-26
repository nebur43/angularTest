import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent{

  artistas: any[] = [];
  
  loading: boolean ;

  constructor(private spotify: SpotifyService) { 
    this.loading = false;
  }

  buscar(texto: string) {
    this.loading = true;
    
    this.spotify.getBusqueda(texto).subscribe( data => {
      console.log(data);
      this.artistas = data;
      this.loading = false;
    });
    
  }
  
}
