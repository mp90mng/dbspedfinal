import { Component,HostListener } from '@angular/core';
import { state, trigger,style,transition,animate } from '@angular/animations';
@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss', './media_queries.scss'],
  animations : [
    trigger('fadeInOne', [
      state('void', style({transform: `translateY(100px)`})),
      transition(':enter', [animate('.4s ease-in')]),
    ]),
  ],
})
export class WhyUsComponent {

  animation = 'void';


  @HostListener('window:scroll', [])
  onScroll(){
    const position = window.scrollY;
    if (window.innerWidth > 900) {
      if (position > 1300) {
        this.animation = 'active';
      } else {
        this.animation = 'void';
      }
    } else if(window.innerWidth >= 800 && window.innerWidth <= 900) {
      if (position > 600) {
        this.animation = 'active';
      } else {
        this.animation = 'void';
      }  
    } else if(window.innerWidth <= 799) {
      if (position > 1200) {
        this.animation = 'active';
      } else {
        this.animation = 'void';
      }  
    }
  }
}
