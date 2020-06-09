import { Component, AfterViewInit } from '@angular/core';
import { JQ } from '@jquery';

@Component({
  selector: 'owl-techs',
  templateUrl: 'app/components/owl_techs/owl_techs.component.html'
})

export class OwlTechsComponent implements AfterViewInit {
	constructor(
		private $: JQ
	){
	}

	ngAfterViewInit(): any {
		this.$.initOwlCarousel('#owl-techn');
	}
}
