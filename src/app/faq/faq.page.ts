import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { FaqService } from '../services/FAQ/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class FaqPage implements OnInit {
  faqs: any[] = [];

  constructor(private navCtrl:NavController,private faqService: FaqService, private alertController: AlertController) { }
  usuarioLogueado: boolean | undefined;
  ngOnInit() {
    this.verificarUsuarioLogueado();
    this.faqService.getFaqs().subscribe(
      response => {
        if (response.status === 'success') {
          this.faqs = response.faqs;
          localStorage.setItem('faqs', JSON.stringify(response.faqs));
        } else {
          this.showAlert('Error de FAQ\'S', response.message);
        }
      },
      error => {
        // Manejar el error HTTP aquí
      }
    );
  }

  verificarUsuarioLogueado() {
    const userData = localStorage.getItem('currentUser');
    this.usuarioLogueado = !!userData;
  }

  openLogin() {
    this.navCtrl.navigateForward('/login');
  }

  openRegister() {
    this.navCtrl.navigateForward('/register');
  }

  openCursos() {
    this.navCtrl.navigateForward('/cursos');
  }

  openProfile() {
    this.navCtrl.navigateForward('/perfil');
  }
  
  openHome() {
    this.navCtrl.navigateForward('/home');
  }

  private showAlert(header: string, message: string) {
    this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    }).then(alert => alert.present());
  }



  
}
