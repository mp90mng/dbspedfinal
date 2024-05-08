import { Component } from '@angular/core';

@Component({
  selector: 'app-services-head',
  templateUrl: './services-head.component.html',
  styleUrls: ['./services-head.component.scss', './media_queries.scss']
})
export class ServicesHeadComponent {
  imageWidth: number = 0;
  imageHeight: number = 0; 

  constructor() {
    let imageWidth = 1600;
    let imageHeight = 125;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
  }
  images = [
    { img: 'assets/images/services/split/row-1-column-1.jpg' },
    { img: 'assets/images/services/split/row-2-column-1.jpg' },
    { img: 'assets/images/services/split/row-3-column-1.jpg' },
    { img: 'assets/images/services/split/row-4-column-1.jpg' },
    { img: 'assets/images/services/split/row-5-column-1.jpg' },
    { img: 'assets/images/services/split/row-6-column-1.jpg' },

  ];

  animation(index: number) {
    return (index * 0.1) + 's';
  }
}
