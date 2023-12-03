import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private urlRegister = 'http://academyrise.mywebcommunity.org/register.php'; 
  private urlLogin = 'http://academyrise.mywebcommunity.org/login.php'; 
  currentUserSubject: BehaviorSubject<any>;
  
  
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
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<any> {
    const datosLogin = {
      CorreoElectronico: email,
      ClaveAcceso: password
    };
    return this.http.post(`${this.urlLogin}`, datosLogin,{ withCredentials: true });
  }

}