import { Injectable } from '@angular/core';
import { easy, index } from '../Listas/listas';

@Injectable({
  providedIn: 'root'
})
export class MemoryServiceService {

  palabras: string[];
  // palabra: string;
  numeros: number[] = [];
  posicionArrNum  = 0;

  constructor() {
    this.numerosAleatorios();
    // console.log('solo una vez');
   }


  public palabrasAleatorias(nivel: number) {
    this.palabras = [];
    nivel += this.posicionArrNum; // = 3
    // console.log(this.posicionArrNum, nivel);
    for (let i = this.posicionArrNum; i < nivel; i++) {
      // console.log(i);
      // console.log(easy[this.numeros[i]] + '+++');

      this.palabras.push(easy[this.numeros[i]]);
    }
    this.posicionArrNum = nivel;
    return this.palabras;
  }

  get listaPalabrasDesordenadas(){
    let nuevoOrden: string[] = [];
    nuevoOrden = [...this.palabras];
    return nuevoOrden.sort(() => Math.random() > 0.5 ? 1 : -1);
  }

  get listaPalabras()
  {
    return this.palabras;
  }

  public numerosAleatorios()
  {

    this.numeros = index.sort(() => Math.random() > 0.5 ? 1 : -1);
    // console.log(this.numeros);
    return this.numeros;
  }


}
