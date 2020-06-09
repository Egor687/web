import { Component, OnInit } from '@angular/core';
import { JQ } from '@jquery';

@Component({
	selector: 'my-page',
	templateUrl: 'app/components/page/page.component.html',
	providers: [ JQ ]
})

export class PageComponent implements OnInit {
	constructor(
		private $: JQ
	){
	}
	ngOnInit(): any{
		// this.$.inlineSvg();
	}
 }
