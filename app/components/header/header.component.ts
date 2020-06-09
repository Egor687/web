import { Component } from '@angular/core';

@Component({
	selector: 'my-header',
	templateUrl: 'app/components/header/header.component.html'
})

export class HeaderComponent {
	mainMenu: any[]
	constructor() {
		this.mainMenu = [
			{
				title: 'Портфолио',
				link: '/portfolio'
			},
			// {
			// 	title: 'Услуги',
			// 	link: '/services'
			// },
			// {
			// 	title: 'Технологии',
			// 	link: '/techs'
			// },
			{
				title: 'Контакты',
				link: '/contacts'
			}
		]
	}
 }
