"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var core_2 = require("@angular/core");
var app_routing_1 = require("./app.routing");
var page_component_1 = require("./components/page/page.component");
var header_component_1 = require("./components/header/header.component");
var footer_component_1 = require("./components/footer/footer.component");
var main_component_1 = require("./components/page_main/main.component");
var portfolio_component_1 = require("./components/page_portfolio/portfolio.component");
var techs_component_1 = require("./components/page_techs/techs.component");
var about_component_1 = require("./components/page_about/about.component");
var contacts_component_1 = require("./components/page_contacts/contacts.component");
var services_component_1 = require("./components/page_services/services.component");
var website_component_1 = require("./components/page_website/website.component");
var banner_component_1 = require("./components/owl_banner/banner.component");
var owl_techs_component_1 = require("./components/owl_techs/owl_techs.component");
var map_component_1 = require("./components/map/map.component");
var subscribe_component_1 = require("./components/form_subscribe/subscribe.component");
var xt_component_1 = require("./components/projects/xt/xt.component");
var litelife_component_1 = require("./components/projects/litelife/litelife.component");
var pizzeria_da_persio_component_1 = require("./components/projects/pizzeria_da_persio/pizzeria_da_persio.component");
var bino_component_1 = require("./components/projects/bino/bino.component");
var barbator_component_1 = require("./components/projects/barbator/barbator.component");
var redirect_component_1 = require("./components/page_redirect/redirect.component");
core_2.enableProdMode();
var PageModule = (function () {
    function PageModule() {
    }
    return PageModule;
}());
PageModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            app_routing_1.routing
        ],
        declarations: [
            page_component_1.PageComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            main_component_1.MainComponent,
            portfolio_component_1.PortfolioComponent,
            services_component_1.ServicesComponent,
            website_component_1.WebsiteComponent,
            banner_component_1.BannerComponent,
            techs_component_1.TechsComponent,
            about_component_1.AboutComponent,
            contacts_component_1.ContactsComponent,
            owl_techs_component_1.OwlTechsComponent,
            map_component_1.MapComponent,
            subscribe_component_1.SubscribeFormComponent,
            xt_component_1.XtComponent,
            litelife_component_1.LitelifeComponent,
            pizzeria_da_persio_component_1.PizzeriaComponent,
            barbator_component_1.BarbatorComponent,
            bino_component_1.BinoComponent,
            redirect_component_1.RedirectComponent
        ],
        bootstrap: [
            page_component_1.PageComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], PageModule);
exports.PageModule = PageModule;
//# sourceMappingURL=page.module.js.map