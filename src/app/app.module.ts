import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { FonctionsComponent } from './fonctions/fonctions.component';
import { MenuComponent } from './menu/menu.component';
import { ChercherVolComponent } from './chercher-vol/chercher-vol.component';
import { ListeVolDispoComponent } from './liste-vol-dispo/liste-vol-dispo.component';
import { ReserverComponent } from './reserver/reserver.component';
import { SingleVolComponent } from './single-vol/single-vol.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HeaderComponent } from './header/header.component';
import { AsideFixComponent } from './aside-fix/aside-fix.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BilletComponent } from './billet/billet.component';
import { RechercherCarteEmbarquementComponent } from './rechercher-carte-embarquement/rechercher-carte-embarquement.component';
import { SuiteReservationPassagerComponent } from './suite-reservation-passager/suite-reservation-passager.component';
import { DetailReservationComponent } from './detail-reservation/detail-reservation.component';
import { ModifierPassagerComponent } from './modifier-passager/modifier-passager.component';
import { CarteEmbarquementComponent } from './carte-embarquement/carte-embarquement.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    FonctionsComponent,
    MenuComponent,
    ChercherVolComponent,
    ListeVolDispoComponent,
    ReserverComponent,
    SingleVolComponent,

    PageAccueilComponent,
     AuthentificationComponent,
     HeaderComponent,
     AsideFixComponent,
     AccueilComponent,
     BilletComponent,
     RechercherCarteEmbarquementComponent,
     SuiteReservationPassagerComponent,
     DetailReservationComponent,
     ModifierPassagerComponent,
     CarteEmbarquementComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
