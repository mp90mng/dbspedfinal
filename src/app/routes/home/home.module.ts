import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SliderComponent } from 'src/app/domain/slider/slider.component';
import { HomeComponent } from './home.component';
import { CounterComponent } from 'src/app/domain/counter/counter.component';
import { WhyUsComponent } from 'src/app/domain/why-us/why-us.component';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutHomeComponent } from 'src/app/domain/about-home/about-home.component';
import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from 'src/app/domain/banner/banner.component';
import { ClientsComponent } from 'src/app/domain/clients/clients.component';


@NgModule({
  declarations: [HomeComponent,AboutHomeComponent,SliderComponent,CounterComponent,WhyUsComponent,BannerComponent,ClientsComponent],
  imports: [
    CommonModule,
    CarouselModule,
    TranslateModule,
    HomeRoutingModule,
    NgOptimizedImage
    ],

  exports:  []
})
export class HomeModule { }
