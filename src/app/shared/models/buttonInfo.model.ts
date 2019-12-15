export class ButtonInfo {
  value:number;
  name:string;
  isOperator:boolean;

  constructor(value:number, name:string = null, isOperator:boolean = false) {
    this.value = value;
    this.name = name;
    this.isOperator = isOperator;
  }

  getValue()
  {
    return this.value;
  }

  getName()
  {
    return this.name;
  }

  IsOperator()
  {
    return this.isOperator;
  }
}
