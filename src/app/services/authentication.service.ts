import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private urlRegister = 'https://academyrise.mywebcommunity.org/register.php'; 
  private urlLogin = 'https://academyrise.mywebcommunity.org/login.php'; 
  
  constructor(private http:HttpClient) { }

  register(username: string,email: string, password: string, role: string): Observable<any> {
    const datosRegistro = {
      NombreUsuario: username,
      CorreoElectronico: email,
      ClaveAcceso: password,
      Rol: role
    };
    console.log(datosRegistro);
    return this.http.post(`${this.urlRegister}`, datosRegistro);
  }

  login(email: string, password: string): Observable<any> {
    const datosLogin = {
      CorreoElectronico: email,
      ClaveAcceso: password
    }; 
    return this.http.post(`${this.urlLogin}`, datosLogin);
  }

}