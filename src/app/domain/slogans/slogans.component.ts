import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-slogans',
  templateUrl: './slogans.component.html',
  styleUrls: ['./slogans.component.scss', './media_queries.scss', './owl-slogans.scss']
})
export class SlogansComponent {

  contents = [
    {title: 'aboutUs.mission', text: 'aboutUs.missionText'},
    {title: 'aboutUs.integrity', text:'aboutUs.integrityText'},
    {title: 'aboutUs.excellence', text: 'aboutUs.excellenceText'},
    {title: 'aboutUs.innovation', text: 'aboutUs.innovationText'},
    {title: 'aboutUs.loyalty', text: 'aboutUs.loyaltyText'},
    {title: 'aboutUs.vision', text: 'aboutUs.visionText'}

  ];


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
        items: 1
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
  }
}
