import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {}


  entrar(UsuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://mundinhokaiquemota.herokuapp.com/usuarios/logar', UsuarioLogin)
  }


  cadastrar(Usuario: Usuario): Observable<Usuario>{
     return this.http.post<Usuario>('https://mundinhokaiquemota.herokuapp.com/usuarios/cadastrar', Usuario)
  }


}
