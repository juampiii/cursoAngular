import { Component } from '@angular/core';
import {ButtonInfo} from '../shared/models/buttonInfo.model';

@Component({
  selector: 'calculator-container',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  buttonsPressed: string[] = [];

  addOperator = "+";
  subtractionOperator:string = "-";
  multiplicationOperator:string = "x";
  divisionOperator:string = "/";
  cleanOperator = "C";
  deleteLastOperator="<";
  calculateOperator="="

  displayOperation:string ="";
  displayResult:string ="";

  total:number=0;
  actual:number=0;
  position:number=0;
  lastOperator:string;

  buttonPressed(buttonInfo:ButtonInfo)
  {
    this.buttonsPressed.push(buttonInfo.getName());

    if(!buttonInfo.isOperator)
    {
      this.actual = (this.actual*10)+buttonInfo.getValue();
      this.position++;
    }
    else
      {
        if(this.lastOperator)
        {
          switch (this.lastOperator) {
            case this.addOperator: this.total = this.total+this.actual;break;
            case this.subtractionOperator: this.total = this.total-this.actual;break;
            case this.multiplicationOperator: this.total = this.total*this.actual;break;
            case this.divisionOperator: this.total = this.total/this.actual;break;
            case this.cleanOperator: {
              this.total = 0;
              this.actual = 0;
              this.position = 0;
            };break;
            case this.calculateOperator:
            {
              this.actual = 0;
              this.position=0;
              this.lastOperator=null;
              this.displayOperation = "";
            }break;
          }

          this.refreshDisplayResult(this.total.toString());
          // Reinicio el sistema
          this.actual = 0;
          this.position=0;
          this.lastOperator=null;
        }
        else
          {
            this.lastOperator = buttonInfo.getName();
            this.total = this.actual;
            this.actual=0;
          }
      }

    this.refreshDisplayOperation(this.displayOperation+buttonInfo.getName())
  }

  refreshDisplayOperation(value:string)
  {
    this.displayOperation = value;
  }

  refreshDisplayResult(value:string)
  {
    this.displayResult = value;
  }


}
