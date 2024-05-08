import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutImageComponent } from 'src/app/domain/about-image/about-image.component';
import { AboutRoutingModule } from './about-routing.module';

import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HistoryComponent } from 'src/app/domain/history/history.component';
import { SlogansComponent } from 'src/app/domain/slogans/slogans.component';


@NgModule({
  declarations: [AboutComponent,AboutImageComponent,HistoryComponent,SlogansComponent],
  imports: [
    CommonModule,
    CarouselModule,
    TranslateModule,
    AboutRoutingModule,
    NgOptimizedImage
  ],
  exports:  []
})
export class AboutModule { }
