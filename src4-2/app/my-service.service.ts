import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Istudent } from './Student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) 
  {

  }
  private _url:string = "/assets/Data/studInfo.json";

  GetStudentDetails():Observable<Istudent[]>
  {
    return this.http.get<Istudent[]>(this._url);

  }


}
