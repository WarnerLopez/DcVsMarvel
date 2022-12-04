import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  Tpersonas: any = [];
  

   
  
  //mipersona = {
   // "userId": 111111,
    
   // "title": "asdasd",
   // "body": "xxx"
 // }
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

   agregar(persona:any){
    this._apiser.agregar(persona).subscribe(data=>{

      console.log(data)
    })

   }
   Test(){
    alert("hola soy un form")
   }

}
