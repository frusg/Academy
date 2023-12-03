import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication/authentication.service';
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

openHome() {
  this.navCtrl.navigateForward('/home');
  window.location.reload();
}

  public loginForm: FormGroup = new FormGroup({});

  constructor(private authService: AuthenticationService, private alertController: AlertController, private formBuilder: FormBuilder,private router: Router,private navCtrl: NavController) 
  {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() { }

  login() {
    if (!this.loginForm.valid) {
      this.showAlert('Error', 'Por favor, ingrese todos los campos correctamente.');
      return;
    }

    const formValue = this.loginForm.value;
    this.authService.login(formValue.email, formValue.password).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          console.log(response);
          localStorage.setItem('currentUser', JSON.stringify(response.userData));
          this.navCtrl.navigateForward('/home'); 
          
        } else {
          this.showAlert('Error de Inicio de Sesión', response.message);
        }
      },
      error: (err: any) => {
        console.error(err);
        this.showAlert('Error de Inicio de Sesión', 'Hubo un problema al intentar iniciar sesión.');
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