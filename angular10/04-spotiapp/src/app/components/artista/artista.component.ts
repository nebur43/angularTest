import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent{

  artistaId : string;
  artista: any = {};
  topTracks: any[] = [];

  isLoading: boolean;

  constructor(private route: ActivatedRoute, private spotify: SpotifyService, private location:Location) { 
    this.isLoading = true;
    this.route.params.subscribe(params => {
      console.log(params);
      this.artistaId = params.id;
      this.getArtista(this.artistaId);
      this.getTopTracks(this.artistaId);
      
    
      this.isLoading = false;
    });
  }

  getArtista(id: string) {
    this.spotify.getArtista(this.artistaId).subscribe(data => this.artista = data);
  }

  getTopTracks(id: string) {
    this.spotify.getTopTrakcs(this.artistaId).subscribe(data => this.topTracks = data);
  }

  backClicked() {
    this.location.back();
  }

  

}
