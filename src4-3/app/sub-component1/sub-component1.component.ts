import { Component, OnInit } from '@angular/core';
import { MyServiceService } from "../my-service.service";
import { IBook } from "../Booklist";
import { IBrowser } from 'selenium-webdriver';
@Component({
  selector: 'app-sub-component1',
  templateUrl: './sub-component1.component.html',
  styleUrls: ['./sub-component1.component.css']
})
export class SubComponent1Component implements OnInit {
  public books=[];
  constructor(private _myservice:MyServiceService) { }

  ngOnInit() {
    this._myservice.GetBookDetails()
    .subscribe(data => this.books = data);
    console.log('jsadjs1111111111',this.books);
    
  }

}
