import { Injectable } from '@angular/core';
import { easy, index, symbols } from '../Listas/listas';

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


  public palabrasAleatorias(nivel: number, nombreLista: string) {
    // debugger;
    this.palabras = [];
    nivel += this.posicionArrNum;
    for (let i = this.posicionArrNum; i < nivel; i++) {
      if ( nombreLista === 'easy' || nombreLista === 'fast')
      {
        this.palabras.push(easy[this.numeros[i]]);
      }
      else if ( nombreLista === 'symbols')
      {
        this.palabras.push(symbols[this.numeros[i]]);
      }
      else {
      }
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
