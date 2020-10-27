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
var core_2 = require("@angular/core");
var MapComponent = (function () {
    function MapComponent(elRef) {
        this.elRef = elRef;
    }
    MapComponent.prototype.ngOnInit = function () {
        jQuery(this.elRef.nativeElement).find('.location_wrap_js').append('<iframe class="studio_location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2564.5001938704663!2d36.30183145158996!3d50.00197934330715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0aa6410e0c5%3A0x32a5a8f1b87e5dd!2z0YPQuy4g0JDQutCw0LTQtdC80LjQutCwINCf0LDQstC70L7QstCwLCAxNTEsINCl0LDRgNGM0LrQvtCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2MTE2MQ!5e0!3m2!1sru!2sua!4v1602761952022!5m2!1sru!2sua" width=" ' + (jQuery(window).outerWidth() - 20) + ' " height="450" frameborder="0" style="border:0" allowfullscreen scrolling="no"></iframe>');
        jQuery(this.elRef.nativeElement).find('.overlay_js').click(function (event) {
            jQuery(this).removeClass('overlay');
        });
    };
    return MapComponent;
}());
MapComponent = __decorate([
    core_1.Component({
        selector: 'my-map',
        template: "<div class=\"location_wrap location_wrap_js\">\n\t\t\t\t\t<div class=\"overlay overlay_js\"></div>\n\t\t\t\t</div>"
    }),
    __metadata("design:paramtypes", [core_2.ElementRef])
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map