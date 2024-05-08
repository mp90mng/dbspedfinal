import { Component } from '@angular/core';
import { trigger,animate,transition,style } from '@angular/animations';


@Component({
  selector: 'app-about-image',
  templateUrl: './about-image.component.html',
  styleUrls: ['./about-image.component.scss', './media_queries.scss'],
  animations: [
    trigger('textAnim', [
      transition(':enter', [
        style({ transform: 'translateX(-200%)' }),
        animate('.9s ease-out', style({ transform: 'translateX(0%)'})),
      ]),
    ]),
  ]
})
export class AboutImageComponent {

  images = [
    { img: 'assets/images/about/sliced/row-1-column-1.jpg' },
    { img: 'assets/images/about/sliced/row-2-column-1.jpg' },
    { img: 'assets/images/about/sliced/row-3-column-1.jpg' },
    { img: 'assets/images/about/sliced/row-4-column-1.jpg' },
    { img: 'assets/images/about/sliced/row-5-column-1.jpg' },
    { img: 'assets/images/about/sliced/row-6-column-1.jpg' },
  ];

  
  animation(index: number) {
    return (index * 0.1) + 's';
  }
}
