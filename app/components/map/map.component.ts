import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
	selector: 'my-map',
	template: `<div class="location_wrap location_wrap_js">
					<div class="overlay overlay_js"></div>
				</div>`
})

export class MapComponent implements OnInit {
	constructor(private elRef: ElementRef){}

	ngOnInit(): any {
		jQuery(this.elRef.nativeElement).find('.location_wrap_js').append('<iframe class="studio_location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.868227405213!2d36.33375571592626!3d49.995079927951814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412709f454712171%3A0x3b2d17930e9f0fe6!2z0L_RgNC-0YHQv9C10LrRgiDQrtCy0ZbQu9C10LnQvdC40LksIDU00JAsINCl0LDRgNC60ZbQsiwg0KXQsNGA0LrRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sua!4v1470824666205" width=" ' + (jQuery(window).outerWidth() - 20) + ' " height="450" frameborder="0" style="border:0" allowfullscreen scrolling="no"></iframe>');
		jQuery(this.elRef.nativeElement).find('.overlay_js').click(function(event){
			jQuery(this).removeClass('overlay');
		});
	}
}
