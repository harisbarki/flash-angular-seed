import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import {environment} from './../../environments/environment';

@Injectable()
export class TasksService {

	private serverUrl = '/api/tasks';
	private serviceName = 'TasksService';

	urlLinks = {};

	constructor(private http: HttpClient) {
		this.serverUrl = environment.host + this.serverUrl;
	}

	getAll() {
		return this.http.get(`${this.serverUrl}`)
			.toPromise()
			.then(
				response => {
					const objectReceived = response;
					console.log(this.serviceName, 'getAll::success', objectReceived);
					return objectReceived['data'];
				},
				error => {
					console.error(this.serviceName, 'getAll::errorCallback', error);
					throw error;
				}
			);
	};

}

