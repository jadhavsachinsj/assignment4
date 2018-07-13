import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  public studentList = [];

  constructor(private _myservice:MyServiceService) 
  { 

  }

  ngOnInit() 
  {
    this._myservice.GetStudentDetails()
    .subscribe(data=>this.studentList=data);
  }

}
