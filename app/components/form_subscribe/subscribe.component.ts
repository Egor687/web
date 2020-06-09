import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'form_subscribe',
    templateUrl: './subscribe.component.html'
})
export class SubscribeFormComponent {
    constructor(

    ) { }

    addSubscription(email: string) {
		console.log(`Активирована подписка для ${email}`);
	}
}