import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DnsComponent } from './pages/information/dns/dns.component';
import { FiberHomeComponent } from './pages/onu/fiberHome/fiber-home.component';
import { HuaweiComponent } from './pages/onu/huawei/huawei.component';
import { IntelbrasComponent } from './pages/onu/intelbras/intelbras.component';
import { ZteComponent } from './pages/onu/zte/zte.component';
import { GreatekComponent } from './pages/router/greatek/greatek.component';
import { RouterIntelbrasComponent } from './pages/router/router-intelbras/router-intelbras.component';
import { RouterzteComponent } from './pages/router/routerzte/routerzte.component';
import { TendaComponent } from './pages/router/tenda/tenda.component';
import { TpLinkComponent } from './pages/router/tp-link/tp-link.component';
import { DudeComponent } from './pages/software/dude/dude.component';
import { NetNumenComponent } from './pages/software/net-numen/net-numen.component';
import { U2000Component } from './pages/software/u2000/u2000.component';
import { AgendaComponent } from './pages/system/agenda/agenda.component';
import { MkSolutionsComponent } from './pages/system/mk-solutions/mk-solutions.component';
import { MktZapComponent } from './pages/system/mkt-zap/mkt-zap.component';
import { HomeComponent } from './home/home.component';
import { AdditionalInformationComponent } from './pages/information/additional-information/additional-information.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'fiberHome', component: FiberHomeComponent},
  {path: 'huawei', component: HuaweiComponent},
  {path: 'intelbras', component: IntelbrasComponent},
  {path: 'zte', component: ZteComponent},
  {path: 'greatek', component: GreatekComponent},
  {path: 'routerIntelbras', component: RouterIntelbrasComponent},
  {path: 'routerZte', component: RouterzteComponent},
  {path: 'tpLink', component: TpLinkComponent},
  {path: 'tenda', component: TendaComponent},
  {path: 'mkSolutions', component: MkSolutionsComponent},
  {path: 'mktZap', component: MktZapComponent},
  {path: 'unm', component: AgendaComponent},
  {path: 'u2000', component: U2000Component},
  {path: 'netNumen', component: NetNumenComponent},
  {path: 'dude', component: DudeComponent},
  {path: 'dns', component: DnsComponent},
  {path: 'additionalInformation', component: AdditionalInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
