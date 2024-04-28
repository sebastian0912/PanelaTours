import { Component } from '@angular/core';
import { Telefono } from '../Model/Telefono';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  sendWhatsAppMessage(planDetails: string) {

    const phoneNumber = Telefono
    const message = encodeURIComponent(planDetails);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }
}
