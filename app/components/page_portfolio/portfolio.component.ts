import { Component, OnInit } from '@angular/core';
import { JQ } from '@jquery';

@Component({
	moduleId: module.id,
	selector: 'my-portfolio',
	templateUrl: './portfolio.component.html'
})

export class PortfolioComponent implements OnInit {
	constructor(
		private $: JQ
	){
	}
	ngOnInit(): any{
		this.$.scrollTop();
	}
}