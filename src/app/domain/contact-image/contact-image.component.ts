import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-image',
  templateUrl: './contact-image.component.html',
  styleUrls: ['./contact-image.component.scss', './media_queries.scss']
})
export class ContactImageComponent {
  imageWidth: number = 0;
  imageHeight: number = 0; 

  constructor() {
    let imageWidth = 1600;
    let imageHeight = 122;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
  }

  images = [
    { img: 'assets/images/contactImage/split/row-1-column-1.jpg' },
    { img: 'assets/images/contactImage/split/row-2-column-1.jpg' },
    { img: 'assets/images/contactImage/split/row-3-column-1.jpg' },
    { img: 'assets/images/contactImage/split/row-4-column-1.jpg' },
    { img: 'assets/images/contactImage/split/row-5-column-1.jpg' },
    { img: 'assets/images/contactImage/split/row-6-column-1.jpg' }
  ]


  animation(index: number) {
    return (index * 0.1) + 's';
  }
}