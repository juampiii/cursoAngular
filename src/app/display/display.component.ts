import {Component, Input} from '@angular/core';
import {Button} from '../shared/models/button.model';

@Component({
  selector: 'genericDisplay',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {

  @Input()
  displayValue:string = "2+4"
}
