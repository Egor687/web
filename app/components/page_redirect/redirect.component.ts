import { Component, OnInit } from '@angular/core';
import { JQ } from '@jquery';

@Component({
	moduleId: module.id,
	selector: 'my-redirect',
	templateUrl: './redirect.component.html'
})

export class RedirectComponent implements OnInit {
	constructor(
		private $: JQ
	){
	}
	ngOnInit(): any{
		this.$.scrollTop();
		var test = window.location.hash.substr(1);
		window.open('http://' + test, '_blank');
		window.history.back();
	}
}