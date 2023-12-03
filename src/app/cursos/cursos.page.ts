import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CursosPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  openHome() {
    this.navCtrl.navigateForward('/home');
  }
}
