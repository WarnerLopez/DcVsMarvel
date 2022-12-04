import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 

const httpOptions ={
  
  headers: new HttpHeaders({
    'Content-Type':'appication/json;charset=UTF-8'
  })

}

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  
  private url:string = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private _http:HttpClient) { }


//metodo AJAX hacua los APIS //Obervarble
//el subcrite se hace en el componenete qie se inyecta
  getData():Observable<any>{
    
    return this._http.get<any>(this.url);
  }
  
  agregar(persona:any):Observable<any>{
    

    return this._http.post<any>(this.url,persona,httpOptions)
  }

}
