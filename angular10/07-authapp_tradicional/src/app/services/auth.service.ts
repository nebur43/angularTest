import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // crear nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Loggin
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


  private url='https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey='AIzaSyAOYvUbW_i6vc-57UXETwtwANjhZSFG-Vg';

  private idToken:string;

  constructor(private http: HttpClient) { 
    this.leerToken();
  }

  logout() {
    localStorage.removeItem('token');
    this.idToken = '';
  }

  login(usuario: UsuarioModel) {
    const authData = {
      //...usuario, tambien se puede poner esto en vez de meter el mail y password
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }
    return this.http.post(`${this.url}signInWithPassword?key=${this.apiKey}`,authData)
      .pipe(map( resp => {
        this.guardarToken(resp['idToken'],resp['expiresIn']);
        return resp;
      }));
  }

  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      //...usuario, tambien se puede poner esto en vez de meter el mail y password
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }
    return this.http.post(`${this.url}signUp?key=${this.apiKey}`,authData)
      .pipe(map( resp => {
        this.guardarToken(resp['idToken'],resp['expiresIn']);
        return resp;
      }));
  }

  leerToken(){
      if (localStorage.getItem('token')) {
        this.idToken = localStorage.getItem('token');
      } else {
        this.idToken = '';
      }

  }

  guardarToken(token: string, expiresIn: String) {
    this.idToken = token;
    localStorage.setItem('token',token);
    let expirity = new Date().setSeconds(Number(expiresIn));
    localStorage.setItem('expirity', expirity.toString() );
  }

  estaAutenticado():boolean {

    if (this.idToken.length < 3 ) {
      return false;
    }

    const fechaCaduca = new Date(Number(localStorage.getItem('expirity'))  );
    return fechaCaduca > new Date() ;
  }
}
