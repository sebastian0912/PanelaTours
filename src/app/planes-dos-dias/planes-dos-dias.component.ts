import { Component } from '@angular/core';
import { Telefono } from '../Model/Telefono';
@Component({
  selector: 'app-planes-dos-dias',
  templateUrl: './planes-dos-dias.component.html',
  styleUrls: ['./planes-dos-dias.component.css']
})
export class PlanesDosDiasComponent {

  sendWhatsAppMessage(planDetails: string) {

    const phoneNumber = Telefono
    const message = encodeURIComponent(planDetails);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

}
