import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  numberFrist: number = 0;
  numberSecond: number = 0;
  result: any;


  constructor() {
  }

  ngOnInit(): void {
  }

  getAddition() {
    this.result = this.numberFrist + this.numberSecond
  }

  getSubtraction(){
    this.result= this.numberFrist-this.numberSecond
  }
  getMultiplication(){
    this.result= this.numberFrist*this.numberSecond
  }
  getDivision(){
    if (this.numberSecond!=0){
      this.result= this.numberFrist/this.numberSecond
    }
  }

}
