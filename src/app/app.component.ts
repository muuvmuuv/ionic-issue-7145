import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { IonApp, IonRouterOutlet, IonButton } from '@ionic/angular/standalone';
import { nanoid } from 'nanoid';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	standalone: true,
	imports: [IonApp, IonRouterOutlet, IonButton],
})
export class AppComponent implements OnInit {
	private readonly httpClient = inject(HttpClient);

	ngOnInit(): void {
		this.doRequest();
	}

	doRequest(): void {
		const id = nanoid();

		this.httpClient
			.post(
				'https://jsonplaceholder.typicode.com/posts',
				{
					title: 'Title: ' + id,
					body: 'Body: ' + id,
					userId: id,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						'X-TEST': 'MISSING',
					},
				},
			)
			.subscribe((response) => {
				console.log(response);
			});
	}
}
