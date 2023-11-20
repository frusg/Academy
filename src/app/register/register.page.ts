import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule,HttpClientModule]
})
export class RegisterPage implements OnInit {
  public registerForm: FormGroup;
  
  constructor(private authService: AuthenticationService, private alertController: AlertController, private formBuilder: FormBuilder,private router: Router,private navCtrl: NavController) { 
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(35)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(35)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      confirmPassword: ['', [Validators.required]],
      role: ['alumno', [Validators.required]]
    });

  }

  openHome() {
    this.navCtrl.navigateForward('/home');
  }

  ngOnInit() {
  }

  register() {
    /* AHORA E DESHABILITADO LA OPCION DEL SUBMIT SI NO ES VALIDO */
    if (!this.registerForm.valid) {
      this.showAlert('Error', 'El formulario no es válido.');
      return;
    }

    const formValue = this.registerForm.value;
    if (formValue.password !== formValue.confirmPassword) {
      this.showAlert('Error', 'Las contraseñas no coinciden.');
      return;
    }
    
    this.authService.register(formValue.username, formValue.email, formValue.password, formValue.role).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['login']);
      },
      error: (err) => {
        console.error(err);
        this.showAlert('Error de Registro', err.error.message);
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
