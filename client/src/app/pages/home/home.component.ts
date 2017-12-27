import {Component} from '@angular/core';

import {TasksService} from './../../shared';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html'
})
export class HomeComponent {

	constructor(private tasksService: TasksService) {
		this.tasksService.getAll().then((data)=>{
			console.log('homeComponent', data);
		});
	}
}
