import {Component, Input} from '@angular/core';

@Component({
  selector: 'genericDisplay',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {

  @Input()
  displayValue:string = "2+4"
}
