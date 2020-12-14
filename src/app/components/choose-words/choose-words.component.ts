import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemoryServiceService } from '../../services/memory-service.service';
import { ViewWillEnter } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-choose-words',
  templateUrl: './choose-words.component.html',
  styleUrls: ['./choose-words.component.scss'],
})
export class ChooseWordsComponent implements OnInit, ViewWillEnter {

  palabras: string[] = [];
  palabrasDesordenadas: string[] = [];
  contador = 0;
  contadorIncorrecto  = 0;
  correcto = {};
  timer = 0;
  nombreLista: string;
  intervalo: any;
  isFast = false;
  @ViewChild('lifes') block: ElementRef;
  constructor(public service: MemoryServiceService, private route: Router,
              private activate: ActivatedRoute, public alertController: AlertController )
              {
                    this.nombreLista = activate.snapshot.paramMap.get('lista');
              }

   onClick(item: string, index: number){
          // debugger;
          console.log('dio click');
          if ( item === this.palabras[this.contador]) {
            this.correcto[index] = true;
            if (this.contador === (this.palabras.length - 1) )
            {
              console.log('esta es la ultima punzada deberia ser true' +  this.correcto[index]);
              this.limpiarIntervalo();
              // this.enviarPantallaConT('next');
              this.presentAlertConfirm();
            }
            this.contador = this.contador + 1;
            console.log(index);
          }
          else{

            if ( this.contadorIncorrecto < 2 ){
                document.getElementById(this.contadorIncorrecto.toString()).style.display = 'none';
                this.contadorIncorrecto += 1;
                // console.log('contador incorrecto: ' + this.contadorIncorrecto );

            }
            else {
              // debugger;
              this.limpiarIntervalo();
              this.route.navigate(['page-score', this.palabrasDesordenadas.length - 2 , this.nombreLista]); }
          }

        }
  async presentAlertConfirm() {
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            // header: 'Confirm!',
            message: 'Good Job!!',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                  console.log('Confirm Cancel: blah');
                }
              }, {
                text: 'Next Level',
                handler: () => {
                  this.route.navigate(['page-palabra', this.nombreLista]);
                }
              }
            ]
          });
          await alert.present();
        }

  // enviarPantallaConT(pag: string){

  //     setTimeout(() => {

  //       if ( pag === 'next')
  //       {
  //         this.route.navigate(['page-palabra', this.nombreLista]);

  //       }
  //       else{

  //       }
  //   }, 2000);


  // }

  limpiarIntervalo()
  {
    if (this.nombreLista === 'fast')
    {
      this.isFast = true;
      clearInterval(this.intervalo);
    }
    else{
      this.isFast = false;
    }

  }
  ionViewWillEnter()
  {
    if (this.nombreLista === 'fast')
    {
      this.isFast = true;

      this.intervalo = setInterval(() => {
        this.timer ++;
        console.log(this.timer);
        if ( this.timer === 10){
          clearInterval(this.intervalo);
          this.route.navigate(['page-score', this.palabrasDesordenadas.length - 2 , this.nombreLista]);
        }
      }, 1000);

    }
    else
    {
      this.isFast = false;
    }

  }

  ngOnInit() {
    // console.log('se llamo noninit');
    this.palabrasDesordenadas = this.service.listaPalabrasDesordenadas;

    this.palabras = this.service.listaPalabras;
    // console.log(this.palabras + '***');
    // console.log(this.palabrasDesordenadas + ' DESORDEN***');

    // setTimeout(() => {

    //   this.route.navigate(['page-palabra']);
    // }, 8000);
    // console.log('mandar a otra pantalla');
  }

}
