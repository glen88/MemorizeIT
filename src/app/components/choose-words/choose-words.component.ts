import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemoryServiceService } from '../../services/memory-service.service';

@Component({
  selector: 'app-choose-words',
  templateUrl: './choose-words.component.html',
  styleUrls: ['./choose-words.component.scss'],
})
export class ChooseWordsComponent implements OnInit {

  palabras: string[] = [];
  palabrasDesordenadas: string[] = [];
  contador = 0;
  contadorIncorrecto  = 0;
  correcto = {};
  wrong = {};
  @ViewChild('lifes') block: ElementRef;
  constructor(public service: MemoryServiceService, private route: Router) {
    // const lista = this.service.palabrasAleatorias(3);
    // console.log(lista);
    // this.route.params.subscribe(params => {
    //   console.log(params);
    // });
    // console.log(this.service.listaPalabras);
   }

   onClick(item: string, index: number){

          if ( item === this.palabras[this.contador]) {
            this.correcto[index] = true;
            console.log('Orden Correcto');
            this.contador === (this.palabras.length - 1) ? this.route.navigate(['page-palabra']) : console.log('correcto');
            this.contador = this.contador + 1;
          }
          else{

            if ( this.contadorIncorrecto < 2 ){
                document.getElementById(this.contadorIncorrecto.toString()).style.display = 'none';
                this.contadorIncorrecto += 1;
                console.log('contador incorrecto: ' + this.contadorIncorrecto );

            }
            else { this.route.navigate(['home']); }
          }

        }
  ngOnInit() {
    // console.log('se llamo noninit');
    this.palabrasDesordenadas = this.service.listaPalabrasDesordenadas;

    this.palabras = this.service.listaPalabras;
    console.log(this.palabras + '***');
    console.log(this.palabrasDesordenadas + ' DESORDEN***');

    // setTimeout(() => {

    //   this.route.navigate(['page-palabra']);
    // }, 8000);
    // console.log('mandar a otra pantalla');
  }

}
