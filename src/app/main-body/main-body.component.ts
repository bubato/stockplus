import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
  @Input() public name : string;	
  @Input() public id : number;
  @Output() close: EventEmitter<any> = new EventEmitter();
  public style: object = {};
  delete(){
  	this.close.emit(this.id);
  }
  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'inline-flex',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }
  constructor() {
  }

  ngOnInit() {
   
  }

}
