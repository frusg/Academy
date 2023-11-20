import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule,HttpClientModule]
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup = new FormGroup({});

  constructor(private authService: AuthenticationService, private alertController: AlertController, private formBuilder: FormBuilder,private router: Router,private navCtrl: NavController) 
  {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
/*   openHome() {
    this.navCtrl.navigateForward('/home');
  } */

  openHomeDesdeLogin() {
    this.navCtrl.navigateForward('/home');
  }
  home(){
    this.navCtrl.navigateForward('/home');
  }
  ngOnInit() {

  }

    login() {
    if (!this.loginForm.valid) {
      // Mostrar algún error al usuario, como una alerta
      this.showAlert('Error', 'Por favor, ingrese todos los campos.');
      return;
    }

    const formValue = this.loginForm.value;
    this.authService.login(formValue.email, formValue.password).subscribe({
      next: (response: any) => {
        // Aquí manejarías la lógica post inicio de sesión exitoso
        console.log(response);
        this.router.navigate(['/home']); // Cambiar '/home' por la ruta deseada
      },
      error: (err: any) => {
        // Aquí manejarías el error de inicio de sesión
        console.error(err);
        this.showAlert('Error de Inicio de Sesión', 'Usuario o contraseña incorrectos.');
      }
    });
  } 

  private showAlert(header: string, message: string) {
    this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    }).then(alert => alert.present());
  }
}
