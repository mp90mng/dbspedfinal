import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ServicesComponent } from './services.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateModule } from '@ngx-translate/core';
import { ServicesRoutingModule } from './services-routing.module';
import { OurServicesComponent } from 'src/app/domain/our-services/our-services.component';
import { LinesComponent } from 'src/app/domain/lines/lines.component';
import { ServicesHeadComponent } from 'src/app/domain/services-head/services-head.component';




@NgModule({
  declarations: [ServicesComponent,ServicesHeadComponent,OurServicesComponent,LinesComponent],
  imports: [
    CommonModule,
    CarouselModule,
    TranslateModule,
    ServicesRoutingModule,
    NgOptimizedImage
    ]
})
export class ServicesModule { }
