import { Component } from '@angular/core';

@Component({
	selector: 'my-header',
	templateUrl: 'app/components/header/header.component.html'
})

export class HeaderComponent {
	mainMenu: any[]
	constructor() {
		this.mainMenu = [
			//{
			//	title: 'Портфолио',
			//	link: '/portfolio'
			//},
			{
				title: 'Маркетинг',
				link: '/'
			},
			{
				title: 'IT сервис',
				link: '/4'
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
				title: 'Написати в Viber',
				link: '{{app?.}}viber://chat?number=+380958279022'
			},
			{
				title: 'Контакты',
				link: '/contacts'
			}
		]
	}
 }
