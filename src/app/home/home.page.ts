import { HttpClient, HttpContext } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import {
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonButton,
} from '@ionic/angular/standalone';
import { nanoid } from 'nanoid';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
	standalone: true,
	imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage implements OnInit {
	private readonly httpClient = inject(HttpClient);

	ngOnInit(): void {
		this.doRequest();
	}

	doRequest(): void {
		const id = nanoid();
		const context = new HttpContext();

		const formData = new FormData();
		formData.append('title', 'Title: ' + id);
		formData.append('body', 'Body: ' + id);
		formData.append('userId', id);

		this.httpClient
			.request('post', 'https://jsonplaceholder.typicode.com/posts', {
				context,
				body: formData,
				headers: {
					'X-TEST': 'MISSING',
				},
				withCredentials: true,
			})
			.subscribe((response) => {
				console.log(response);
			});
	}
}
