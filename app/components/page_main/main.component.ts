import { Component, OnInit, AfterViewInit } from '@angular/core';
import { JQ } from '@jquery';
declare var jQuery: any;

@Component({
	moduleId: module.id,
	selector: 'my-main',
	templateUrl: './main.component.html'
})

export class MainComponent implements AfterViewInit {
	constructor(
		private $: JQ
	){
	}
	ngAfterViewInit(): any{
		this.$.inlineSvg();
		this.$.animated_scroll();
		jQuery('.parallax-mirror').remove();
		setTimeout(function(){
			this.$('.services_wrap').parallax({
				imageSrc: '/compiled/img/bg5.jpg',
				overScrollFix: true,
				androidFix: false,
				iosFix: false,
			});
			this.$('.about_studio_wrap').parallax({
				imageSrc: '/compiled/img/bg4.jpg',
				overScrollFix: true,
				androidFix: false,
				iosFix: false,
			});
		}, 1000);
	}
	ngOnInit(){
		this.$.scrollTop();
	}
	ngOnDestroy(){
		jQuery('.parallax-mirror').remove();
	}
}