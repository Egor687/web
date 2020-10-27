"use strict";
var router_1 = require("@angular/router");
var main_component_1 = require("./components/page_main/main.component");
var portfolio_component_1 = require("./components/page_portfolio/portfolio.component");
var services_component_1 = require("./components/page_services/services.component");
var website_component_1 = require("./components/page_website/website.component");
var techs_component_1 = require("./components/page_techs/techs.component");
var about_component_1 = require("./components/page_about/about.component");
var contacts_component_1 = require("./components/page_contacts/contacts.component");
var xt_component_1 = require("./components/projects/xt/xt.component");
var litelife_component_1 = require("./components/projects/litelife/litelife.component");
var pizzeria_da_persio_component_1 = require("./components/projects/pizzeria_da_persio/pizzeria_da_persio.component");
var bino_component_1 = require("./components/projects/bino/bino.component");
var barbator_component_1 = require("./components/projects/barbator/barbator.component");
var redirect_component_1 = require("./components/page_redirect/redirect.component");
var appRoutes = [
    { path: '', component: main_component_1.MainComponent },
    { path: 'portfolio', component: portfolio_component_1.PortfolioComponent },
    { path: 'services', component: services_component_1.ServicesComponent },
    { path: 'website', component: website_component_1.WebsiteComponent },
    { path: 'techs', component: techs_component_1.TechsComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contacts', component: contacts_component_1.ContactsComponent },
    { path: 'portfolio/xt', component: xt_component_1.XtComponent },
    { path: 'portfolio/litelife', component: litelife_component_1.LitelifeComponent },
    { path: 'portfolio/pizzeria_da_persio', component: pizzeria_da_persio_component_1.PizzeriaComponent },
    { path: 'portfolio/barbator', component: barbator_component_1.BarbatorComponent },
    { path: 'portfolio/bino', component: bino_component_1.BinoComponent },
    { path: 'redirect', component: redirect_component_1.RedirectComponent },
    { path: '**', component: redirect_component_1.RedirectComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map