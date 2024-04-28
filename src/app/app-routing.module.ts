import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanesDiaComponent } from './planes-dia/planes-dia.component';
import { PlanesDosDiasComponent } from './planes-dos-dias/planes-dos-dias.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'planes-1-dia', component: PlanesDiaComponent },
  { path: 'planes-2-dias', component: PlanesDosDiasComponent },
  { path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
