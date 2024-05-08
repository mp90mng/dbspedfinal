import { Component, HostListener, OnInit } from '@angular/core';
import { trigger,animate,transition,style } from '@angular/animations';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss', './media_queries.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: '0' }),
        animate('.7s ease-out', style({ transform: 'scale(1)', opacity: '1'})),
      ]),
    ]),
  ]
})
export class LinesComponent implements OnInit {
  fade = 'void';
  arrow:boolean = false;
  scroll:boolean = false;

  @HostListener('window:scroll', [])
  fadeIn() {
    const position = window.scrollY;
  
    if (window.innerWidth > 1024) {
      if (position > 760) {
        this.fade = 'animate';
        this.scroll = true;
      } 
    } else if (window.innerWidth <= 1024 && window.innerWidth > 769) {
      if (position > 450) {
        this.fade = 'animate';
        this.scroll = true;
      } 
    } else if (window.innerWidth <= 768 && window.innerWidth >= 600) {
      if (position > 500) {
        this.fade = 'animate';
        this.scroll = true;
      }
    } else if (window.innerWidth <= 599) {
      if (position > 460) {
        this.fade = 'animate';
        this.scroll = true;
      }
    }
  }
  ngOnInit(): void {
    this.onResize();
 
  }

  @HostListener('window:resize', [])
    onResize(){
      if(window.innerWidth < 600){
        this.arrow = true;
      } else{
        this.arrow = false;
      }
    }
  }

