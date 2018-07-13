import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input()public str:string;
  //@Input('str')name:string;
  @Output()public MyEvent = new EventEmitter();


  public sendEvent()
  { 
    console.log('inside sendEvent')
    this.MyEvent.emit('Hello From child');
  }
  constructor() { 
    
    
    
  }

  ngOnInit() {
  }

}
