import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public service: MemoryServiceService, public route: Router) { }

  ngOnInit() {
  }

  ionViewDidLeave()
  {
    this.palabra = '';
  }

  ionViewWillEnter(){
    // console.log(this.nivel);
    // console.log('after');
    this.lista = this.service.palabrasAleatorias(this.nivel);
    console.log(this.lista + 'PALABRAS ALEATORIAS');
    this.nivel += 1;
    // console.log(this.nivel);
    this.muestraPalabra(this.lista, 800);
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
      // console.log('mandar a otra pantalla2');

    });

    setTimeout(() => {
      // console.log('pantalla2');
      this.route.navigate(['choose']);
    },  time + offset);
    // console.log('mandar a otra pantalla');
  }

}
