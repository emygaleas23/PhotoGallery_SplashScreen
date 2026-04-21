import { Component } from '@angular/core';
import { AlertaService } from '../services/alerta.service';
import { IonAlert, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(private alertaService: AlertaService) {}

  lanzarAlerta() {
    this.alertaService.presentAlert(
      'Alerta', 
      'Mensaje desde un servicio personalizado de alerta.', 
      );
  }

}
