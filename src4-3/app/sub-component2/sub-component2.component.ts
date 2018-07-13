import { Component, OnInit } from '@angular/core';
import { MyServiceService } from "../my-service.service";

@Component({
  selector: 'app-sub-component2',
  templateUrl: './sub-component2.component.html',
  styleUrls: ['./sub-component2.component.css']
})
export class SubComponent2Component implements OnInit {
  public books=[];

  constructor(private _myservice:MyServiceService) { }

  ngOnInit() {
    this._myservice.GetBookDetails()
    .subscribe(data=>this.books=data);
  }

}
