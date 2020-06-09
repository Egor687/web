import { Component, ElementRef, OnInit } from '@angular/core';

// import { Slide } from './slide';
// import { SlidesService } from './slides.service';

declare var jQuery: any;

@Component({
  selector: 'owl-banner',
  templateUrl: 'app/components/owl_banner/banner.component.html',
  // providers: [SlidesService]
})

export class BannerComponent implements OnInit {
	slides: Array<Object>;
	errorMessage: string;
	constructor(
		private elRef: ElementRef
		// private slidesService: SlidesService
	){

	}

	ngOnInit(): any {
		// this.getSlides();
		jQuery(this.elRef.nativeElement).ready(function(){
			jQuery(this).find("#owl-banner").owlCarousel({
				slideSpeed: 300,
				paginationSpeed: 400,
				singleItem:true,
				mouseDrag: false,
				autoPlay: 12000,
				stopOnHover: false,
				autoHeight: false,
				transitionStyle: "fade"
			});
		});
	}

	// getSlides(){
	// 	this.slidesService.getSlides()
	// 		.subscribe(
	// 			result => this.slides = result,
	// 			error =>  this.errorMessage = <any>error);
	// }
}
