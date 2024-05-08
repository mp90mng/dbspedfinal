import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss', './media_queries.scss']
})
export class CounterComponent {

  clients:number = 0;
  km:number = 0;
  turnover:number = 0;
  employees:number = 0;
  clientsCount = setInterval(() =>{
    this.clients++;
    if(this.clients === 500){
      clearInterval(this.clientsCount);
    }
  },7);


  kmCount = setInterval(() =>{
    this.km++;
    if(this.km === 10){
      clearInterval(this.kmCount);
    }
  },300);


  turnoverCount = setInterval(() =>{
    this.turnover++;

    if(this.turnover === 10){
      clearInterval(this.turnoverCount);
    }
  },300)

  employeesCount= setInterval(() =>{
    this.employees++;

    if(this.employees === 140){
      clearInterval(this.employeesCount);
    }
  },20)


}
