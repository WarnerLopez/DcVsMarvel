import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/Services/apiservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  Tpersonas: any = [];


  // Modelo
  MiPersona ={
    "userId": "",
    "title": "",
    "body": ""
  }

   
  constructor(private _apiser:ApiserviceService) { }

  ngOnInit(): void{

  //this.agregar(this.mipersona)
   //this.Getdata()
   
  }

  Getdata(){

    this._apiser.getData().subscribe(data =>{
     console.log(data)
      this.Tpersonas = data

    })
 
   }

   agregar(){
    console.log(this.MiPersona)
    this._apiser.agregar(this.MiPersona).subscribe(data=>{

      console.log(data)
    })

   }
   Test(){
    alert("hola soy un form")
   }

}
