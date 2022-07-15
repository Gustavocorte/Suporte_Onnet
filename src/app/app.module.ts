import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiberHomeComponent } from './pages/onu/fiberHome/fiber-home.component';
import { HuaweiComponent } from './pages/onu/huawei/huawei.component';
import { ZteComponent } from './pages/onu/zte/zte.component';
import { GreatekComponent } from './pages/router/greatek/greatek.component';
import { TpLinkComponent } from './pages/router/tp-link/tp-link.component';
import { TendaComponent } from './pages/router/tenda/tenda.component';
import { RouterzteComponent } from './pages/router/routerzte/routerzte.component';
import { IntelbrasComponent } from './pages/onu/intelbras/intelbras.component';
import { RouterIntelbrasComponent } from './pages/router/router-intelbras/router-intelbras.component';
import { NetNumenComponent } from './pages/software/net-numen/net-numen.component';
import { DudeComponent } from './pages/software/dude/dude.component';
import { U2000Component } from './pages/software/u2000/u2000.component';
import { UnmComponent } from './pages/software/unm/unm.component';
import { AgendaComponent } from './pages/system/agenda/agenda.component';
import { MkSolutionsComponent } from './pages/system/mk-solutions/mk-solutions.component';
import { MktZapComponent } from './pages/system/mkt-zap/mkt-zap.component';
import { DnsComponent } from './pages/information/dns/dns.component';
import { HomeComponent } from './home/home.component';
import { AdditionalInformationComponent } from './pages/information/additional-information/additional-information.component';

@NgModule({
  declarations: [
    AppComponent,
    FiberHomeComponent,
    HuaweiComponent,
    ZteComponent,
    GreatekComponent,
    TpLinkComponent,
    TendaComponent,
    RouterzteComponent,
    IntelbrasComponent,
    RouterIntelbrasComponent,
    NetNumenComponent,
    DudeComponent,
    U2000Component,
    UnmComponent,
    AgendaComponent,
    MkSolutionsComponent,
    MktZapComponent,
    DnsComponent,
    HomeComponent,
    AdditionalInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
