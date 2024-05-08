import { Component, HostListener } from '@angular/core';
import { state, trigger,style,transition,animate } from '@angular/animations';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss', '/media_queries.scss'],
  animations : [
    trigger('trans', [
      state('void', style({transform: `translateX(-200%)`})),
      transition(':enter', [animate('.4s ease-in')]),
    ])
  ]
})
export class HistoryComponent {

  animate = 'void';


  @HostListener('window:scroll', [])
  onScroll(){
    const position = window.scrollY;
    if(position >300){
      this.animate = 'active';
    } else{
      this.animate = 'void';
    }
  }
}
