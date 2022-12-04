import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//inyeccion de dependencias
export class ConsultasService {

  private Heroes: IHeroe[] = [

     {
      nombre:"batman",
      biografia:"Su habilidad se resume en plata y un traje",
      imagen:"assets/img/batman.png",
      Fecha:"1941-11-01",
      Universo:"DC"
     },
     {
      nombre:"Wolverine",
      biografia:"Su habilidad se resume en regeneracion y su garras de adamation",
      imagen:"assets/img/wolverine.png",
      Fecha:"1974-11-01",
      Universo:"Marvel"
     },  {
      nombre:"Spiderman",
      biografia:"La habilidad se resumen en una arana radioactiva y su amor por marry jane ",
      imagen:"assets/img/spiderman.png",
      Fecha:"1962/11/01",
      Universo:"Marvel"
     },
     {
      nombre:"batman",
      biografia:"Su habilidad se resume en plata y un traje",
      imagen:"assets/img/batman.png",
      Fecha:"1941-11-01",
      Universo:"DC"
     },
     {
      nombre:"Wolverine",
      biografia:"Su habilidad se resume en regeneracion y su garras de adamation",
      imagen:"assets/img/wolverine.png",
      Fecha:"1974-11-01",
      Universo:"Marvel"
     },  {
      nombre:"Spiderman",
      biografia:"La habilidad se resumen en una arana radioactiva y su amor por marry jane",
      imagen:"assets/img/spiderman.png",
      Fecha:"1962/11/01",
      Universo:"Marvel"
     },


  ];

  constructor() {

   }


   getHeroes():IHeroe[]{
      
    return this.Heroes;

   }

   BuscarHeroes(termino:string){
    let heroesarr:IHeroe[] = [];

    termino = termino.toLowerCase();
    for (let index = 0; index < this.Heroes.length; index++) {
      
      let Individual = this.Heroes[index]

      let nombre = Individual.nombre.toLowerCase()

      if (nombre.indexOf(termino)>=0) {
        Individual.idx = index
        heroesarr.push(Individual)
      }
      
    }
    return heroesarr;

   }




  LlamarBryan(){
      console.log("llamar a bryan....")
  }
  LlamarWarner(){
    console.log("llamar a warner....")

  }

}


export interface IHeroe{
  nombre: string,
  biografia: string,
  imagen: string,
  Fecha: string,
  Universo: string,
  idx?: number,

}
// los signos de pregunta hacen que la variables no se a oblogatorias en una interface

