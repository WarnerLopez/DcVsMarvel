import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/Services/apiservice.service';
import { IHeroe, ConsultasService } from 'src/app/Services/consultas.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  //local
  Heroes : IHeroe[] = [];
  
  constructor(private _Heroe:ConsultasService, private _apiser:ApiserviceService) { }

  ngOnInit(): void {
    //llenar la vartiable local
    this.Heroes = this._Heroe.getHeroes();
    console.log(this.Heroes);

    this.Getdata()
    
  }


  Getdata(){

   this._apiser.getData().subscribe(data =>{
    console.log(data)
   })

  }

}
