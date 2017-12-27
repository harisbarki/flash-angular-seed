import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {TasksService} from './shared';
import {NavbarComponent} from './components/';
import {AppRoutingModule, routingComponents} from './app.routes';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		routingComponents
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [
		TasksService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
