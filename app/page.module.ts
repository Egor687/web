import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { routing } from './app.routing';

import { PageComponent } from './components/page/page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MainComponent } from './components/page_main/main.component';
import { PortfolioComponent } from './components/page_portfolio/portfolio.component';
import { TechsComponent } from './components/page_techs/techs.component';
import { AboutComponent } from './components/page_about/about.component';
import { ContactsComponent } from './components/page_contacts/contacts.component';
import { ServicesComponent } from './components/page_services/services.component';
import { BannerComponent } from './components/owl_banner/banner.component';
import { OwlTechsComponent } from './components/owl_techs/owl_techs.component';
import { MapComponent } from './components/map/map.component';
import { SubscribeFormComponent } from './components/form_subscribe/subscribe.component';
import { XtComponent } from './components/projects/xt/xt.component';
import { LitelifeComponent } from './components/projects/litelife/litelife.component';
import { PizzeriaComponent } from './components/projects/pizzeria_da_persio/pizzeria_da_persio.component';
import { BinoComponent } from './components/projects/bino/bino.component';
import { BarbatorComponent } from './components/projects/barbator/barbator.component';
import { RedirectComponent } from './components/page_redirect/redirect.component';

enableProdMode();

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		routing
	],
	declarations: [
		PageComponent,
		HeaderComponent,
		FooterComponent,
		MainComponent,
		PortfolioComponent,
		ServicesComponent,
		BannerComponent,
		TechsComponent,
		AboutComponent,
		ContactsComponent,
		OwlTechsComponent,
		MapComponent,
		SubscribeFormComponent,
		XtComponent,
		LitelifeComponent,
		PizzeriaComponent,
		BarbatorComponent,
		BinoComponent,
		RedirectComponent
	],
	bootstrap: [
		PageComponent
	]
})
export class PageModule { }
