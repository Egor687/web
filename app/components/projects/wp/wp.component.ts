import { Component, OnInit, ElementRef } from '@angular/core';
import { Router }            from '@angular/router';
declare var jQuery: any;

@Component({
	moduleId: module.id,
	selector: 'my-wp',
	templateUrl: './wp.component.html'
})

export class WpComponent implements OnInit{
	constructor(private router: Router, private elRef: ElementRef) {
	}
	ngOnInit(): any{
		jQuery('body').scrollTop(0);
	}
}