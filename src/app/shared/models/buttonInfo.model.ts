export class ButtonInfo {
  value:number;
  action:string;
  isOperator:boolean;

  constructor(value:number, action:string = null, isOperator:boolean = false) {
    this.value = value;
    this.action = action;
    this.isOperator = isOperator;
  }
}
