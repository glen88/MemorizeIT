import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewDidEnter, ViewDidLeave, ViewWillEnter } from '@ionic/angular';
import { MemoryServiceService } from '../services/memory-service.service';

@Component({
  selector: 'app-page-palabra',
  templateUrl: './page-palabra.page.html',
  styleUrls: ['./page-palabra.page.scss'],
})
export class PagePalabraPage implements OnInit, ViewWillEnter, ViewDidEnter, ViewDidLeave {
  palabra: string;
  nivel = 3;
  lista: string[] = [];
  nombreLista: string;
  tiempo = 800;

  constructor( public service: MemoryServiceService, private route: Router,
               private activate: ActivatedRoute )
               {
                 this.nombreLista = activate.snapshot.paramMap.get('lista');
                //  debugger;
               }

  ngOnInit() {
  }

  ionViewDidLeave()
  {
    this.palabra = '';
  }

  ionViewWillEnter(){

    this.lista = this.service.palabrasAleatorias(this.nivel, this.nombreLista );
    console.log(this.lista + 'PALABRAS ALEATORIAS');
    this.nivel += 1;
    this.nombreLista === 'fast' ? this.tiempo = 300 : this.tiempo = this.tiempo;
    this.muestraPalabra(this.lista, this.tiempo);
  }
  ionViewDidEnter(){
    // console.log('didEnter');

  }

  public muestraPalabra(palabras: string[], time: number){
    let offset = 0;
    palabras.forEach( result => {

      setTimeout(() => {
        console.log(result);
        this.palabra = result;
      }, time + offset);
      offset += time;

    });

    setTimeout(() => {
      this.route.navigate(['choose', this.nombreLista]);
    },  time + offset);
  }

}
