import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { ReserverComponent } from './reserver/reserver.component';
import { ChercherVolComponent } from './chercher-vol/chercher-vol.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CarteEmbarquementComponent } from './carte-embarquement/carte-embarquement.component';
import { SuiteReservationPassagerComponent } from './suite-reservation-passager/suite-reservation-passager.component';
import { DetailReservationComponent } from './detail-reservation/detail-reservation.component';
import { ModifierPassagerComponent } from './modifier-passager/modifier-passager.component';
import { BilletComponent } from './billet/billet.component';

const routes: Routes = [
  /*{ path: '', component: PageAccueilComponent },*/
  { path: 'reserver', component: ReserverComponent },
  { path: 'chercherVol', component: ChercherVolComponent },
  { path: '', component: AccueilComponent },
  { path: 'carte', component: CarteEmbarquementComponent },
  { path: 'billet', component: BilletComponent },
  { path: 'passager', component: SuiteReservationPassagerComponent },
  { path: 'detailReservation', component: DetailReservationComponent },
  { path: 'modifier', component: ModifierPassagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
