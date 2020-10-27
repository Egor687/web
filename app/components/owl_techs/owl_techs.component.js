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
var _jquery_1 = require("@jquery");
var OwlTechsComponent = (function () {
    function OwlTechsComponent($) {
        this.$ = $;
    }
    OwlTechsComponent.prototype.ngAfterViewInit = function () {
        this.$.initOwlCarousel('#owl-techn');
    };
    return OwlTechsComponent;
}());
OwlTechsComponent = __decorate([
    core_1.Component({
        selector: 'owl-techs',
        templateUrl: 'app/components/owl_techs/owl_techs.component.html'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _jquery_1.JQ !== "undefined" && _jquery_1.JQ) === "function" && _a || Object])
], OwlTechsComponent);
exports.OwlTechsComponent = OwlTechsComponent;
var _a;
//# sourceMappingURL=owl_techs.component.js.map