import { Component, OnInit } from '@angular/core';
import { JQ } from '@jquery';

@Component({
	moduleId: module.id,
	selector: 'my-about',
	templateUrl: './about.component.html'
})

export class AboutComponent implements OnInit{
	constructor(
		private $: JQ
	){
	}
	ngOnInit(): any{
		this.$.scrollTop();
	}
}