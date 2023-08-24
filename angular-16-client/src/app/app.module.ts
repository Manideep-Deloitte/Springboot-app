import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '8331ce5a-1567-48f8-bf03-968576e7e0b3',
    clientToken: 'pubb91d0f4f4c8bfe0f39bf4cdc4a06385b',
    site: 'us5.datadoghq.com',
    service:'demo-app',
    env:'staging',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0', 
    sessionSampleRate:100,
    premiumSampleRate: 100,
    trackUserInteractions: true,
    trackFrustrations: true,
    defaultPrivacyLevel:'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();


@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
