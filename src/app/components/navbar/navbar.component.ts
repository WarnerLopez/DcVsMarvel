import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//inyeccion de dependencias
import { ConsultasService } from 'src/app/Services/consultas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  
   
  }

  buscarHeroe(termino: string){
    console.log(termino)
    this._router.navigate(['/buscar', termino])
  }

}
