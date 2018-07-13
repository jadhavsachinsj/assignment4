import { Component, OnInit } from '@angular/core';
import { MyServiceService } from "../my-service.service";

@Component({
  selector: 'app-sub-component3',
  templateUrl: './sub-component3.component.html',
  styleUrls: ['./sub-component3.component.css']
})
export class SubComponent3Component implements OnInit {
  public books=[];
  constructor(private _myservice:MyServiceService) { }

  ngOnInit() {
    this._myservice.GetBookDetails()
    .subscribe(data=>this.books=data);

  }

}
