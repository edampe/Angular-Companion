import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  taxistas: any[] = []

  lat: number = 51.678418;
  lng: number = 7.809007;

  taxistaSeleccionado: any = {}

  siguiendo: boolean = false

  constructor(private afDB: AngularFireDatabase) {

    afDB.list('/usuarios').subscribe( taxistas => {

      console.log(taxistas)

      this.taxistas = taxistas

      if ( this.siguiendo ) {

        for ( let taxista of taxistas){

          if ( taxista.$key === this.taxistaSeleccionado.$key){
              this.lat = taxista.lat
              this.lng = taxista.lng
          }
        }
      }
    })
  }


  seguir_taxista(taxista: any) {
    console.log(taxista)
    this.lat = taxista.lat
    this.lng = taxista.lng
    this.taxistaSeleccionado = taxista
    this.siguiendo = true
  }

  dejar_seguir_taxista(taxista: any) {

    this.siguiendo = false
    this.taxistaSeleccionado = {}
  }

}
