import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private urlRegister = 'https://academyrise.mywebcommunity.org/register.php'; 
  private urlLogin = 'https://academyrise.mywebcommunity.org/login.php'; 
  private currentUserSubject: BehaviorSubject<any>;
  
  constructor(private http:HttpClient) {
  const currentUserJson = localStorage.getItem('currentUser');
  const currentUser = currentUserJson !== null ? JSON.parse(currentUserJson) : null;
  this.currentUserSubject = new BehaviorSubject<any>(currentUser);
   }

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

/*   login(email: string, password: string): Observable<any> {
    const datosLogin = {
      CorreoElectronico: email,
      ClaveAcceso: password
    }; 
    return this.http.post(`${this.urlLogin}`, datosLogin);
  } */

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<any> {
    const datosLogin = {
      CorreoElectronico: email,
      ClaveAcceso: password
    };
    return this.http.post(`${this.urlLogin}`, datosLogin,{ withCredentials: true });
    //return this.http.post(`tua_url/api/login.php`, datosLogin, { withCredentials: true });
  }

  logout() {
    // Remueve al usuario del almacenamiento local al cerrar sesión
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    // Aquí deberías también llamar a tu API para destruir la sesión en el servidor
  }




}