import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonInfo} from '../shared/models/buttonInfo.model';

@Component({
  selector: 'genericButton',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  // TODO: Crear un modelo para emitir toda la información sobre el botón presionado
  @Output()
  buttonPressed: EventEmitter<ButtonInfo> = new EventEmitter<ButtonInfo>();

  @Input()
  buttonValue: number = 0;

  @Input()
  buttonName:string = "ALGO"

  @Input()
  buttonOperator:boolean = false;

  ClickMe()
  {
    let buttonInfo = new ButtonInfo(this.buttonValue, this.buttonName, this.buttonOperator);

    this.buttonPressed.emit(buttonInfo);
  }
}
