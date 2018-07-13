import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from "./Booklist";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
 
  constructor(private http:HttpClient) 
  { 

  }
  private _url="/assets/data/Books.json";
  
  
  GetBookDetails():Observable<IBook[]>
  {
    
    return this.http.get<IBook[]>(this._url);

  }
  
}
