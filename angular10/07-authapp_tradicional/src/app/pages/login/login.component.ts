import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;
  recuerdame = false;

  constructor(private authService: AuthService,
          private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.recuerdame = true;
    }
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    
    //Swal.fire('The Internet?', 'That thing is still around?', 'question');
    
    Swal.fire({
      allowOutsideClick:false,
      icon: 'info',
      //type: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.authService.login(this.usuario).subscribe(
      data => {
        console.log(data);
        Swal.close();
        if (this.recuerdame) {
          localStorage.setItem('email',this.usuario.email);
        } else {
          localStorage.removeItem('email');
        }
        this.router.navigateByUrl('/home');
      }, err => {
        console.log(err.error.error.message);
        Swal.fire({
          icon: 'error',
          //type: 'info',
          title: 'Error de autenticación',
          text: err.error.error.message
        });
      }
    );

  }

}
