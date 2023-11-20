import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private urlRegister = 'https://academyrise.mywebcommunity.org/register.php'; // Cambiar esto por la URL de la bbdd
  private urlLogin = 'https://academyrise.mywebcommunity.org/login.php'; // Cambiar esto por la URL de la bbdd
  
  constructor(private http:HttpClient) { }

  register(email: string, password: string, username: string, role: string): Observable<any> {
    const datosRegistro = {
      NombreUsuario: username,
      CorreoElectronico: email,
      ClaveAcceso: password,
      Rol: role
    };
    console.log(datosRegistro);
    return this.http.post(`${this.urlRegister}`, datosRegistro);//poner el post te saldra los parametros por separado variable params
  }

  login(email: string, password: string): Observable<any> {
    const datosLogin = {
      CorreoElectronico: email,
      ClaveAcceso: password
    }; 
    return this.http.post(`${this.urlLogin}`, datosLogin);
  }

}
