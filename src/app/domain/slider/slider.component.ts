import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { trigger,animate,transition,style } from '@angular/animations';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss', './media_queries.scss', './owl-slider.scss'],
  animations: [
    trigger('textAnim', [
      transition(':enter', [
        style({ transform: 'translateY(-200%)' }),
        animate('.9s ease-out', style({ transform: 'translateY(0%)'})),
      ]),
    ]),
  ]
})
export class SliderComponent {

  slides = [
    {img: './assets/images/slider/slideOne.jpg'},
    {img: './assets/images/slider/slideTwo.jpg'},
    {img:'./assets/images/slider/slideThree.jpg'},
    {img:'./assets/images/slider/slideFour.jpg'}

  ]
 customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    
  }
}

