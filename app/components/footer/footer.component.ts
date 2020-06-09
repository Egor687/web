import { Component } from '@angular/core';

@Component({
	selector: 'my-footer',
	templateUrl: 'app/components/footer/footer.component.html'
})

export class FooterComponent {
	footerLinks: any[]
	constructor() {
		this.footerLinks = [
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
			// {
			// 	title: 'Наша команда',
			// 	link: '/about'
			// }
		]
	}
}
