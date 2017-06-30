import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  taxistas: FirebaseListObservable<any[]>;

  constructor(private afDB: AngularFireDatabase) {
    this.taxistas = afDB.list('/usuarios');
  }
  lat: number = 51.678418;
  lng: number = 7.809007;
}
