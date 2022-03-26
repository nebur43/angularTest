import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  /**
   * generate token en postman: https://accounts.spotify.com/api/token
   * grant_type = client_credentials
   * client_id = 9d4c8331e1864559bdff55298f3fd7dd
   * client_secret = c962953e1bd64529b27278b8831ab2d8
   * 
   */
  token = 'QC0a2djlycNk-r31p9lhVblKNT5rbZ8nNQ_Mu1u1gelb-ZR1lZIJm05Skp4hBeLzO4yTAjmAISID8if5-A' ;

  constructor(private http:HttpClient) {
    
  }

  //** esto no funciona, no deja ejecutar el metodo: Access to XMLHttpRequest at 'https://accounts.spotify.com/api/token' from origin 'http://localhost:4200' has been blocked by CORS policy */
  getToken() {

    const headers = new HttpHeaders({
      'grant_type':'client_credentials',
      'client_id':'9d4c8331e1864559bdff55298f3fd7dd',
      'client_secret':'c962953e1bd64529b27278b8831ab2d8'
    });

    this.http.get('https://accounts.spotify.com/api/token',{headers}).subscribe( data => {
      console.log(data['access_token']);
      
    });
    
    
    
  }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + this.token
    });

    return this.http.get(`https://api.spotify.com/v1/${query}`,{headers});

  }

  getNewReleases() {   
    return this.getQuery('browse/new-releases?limit=21')
              .pipe( map( data => data['albums'].items) );
  }

  getBusqueda(texto: string) {
    
    return this.getQuery(`search?q=${texto}&type=artist&limit=15`)
            .pipe( map ( data => data['artists'].items));

  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTrakcs(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=ES`).pipe( map (data => data['tracks']));
  }
}
