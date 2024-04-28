import { Component } from '@angular/core';
import { Telefono } from '../Model/Telefono';

@Component({
  selector: 'app-planes-dia',
  templateUrl: './planes-dia.component.html',
  styleUrls: ['./planes-dia.component.css']
})
export class PlanesDiaComponent {
  sendWhatsAppMessage(planDetails: string) {

    const phoneNumber = Telefono
    const message = encodeURIComponent(planDetails);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

}
