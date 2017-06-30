import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyAKM8uiXsuEcj723SDSv_pLSw7u1A23_34",
    authDomain: "tracker-c52f2.firebaseapp.com",
    databaseURL: "https://tracker-c52f2.firebaseio.com",
    projectId: "tracker-c52f2",
    storageBucket: "tracker-c52f2.appspot.com",
    messagingSenderId: "40818415400"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAwzyYtq8EIe9PaZm3Wy3ouBAqiFVRDcdk'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
