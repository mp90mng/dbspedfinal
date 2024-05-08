import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactInfoComponent } from 'src/app/domain/contact-info/contact-info.component';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactRoutingModule } from './contact-routing.module';
import { FormComponent } from 'src/app/domain/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactImageComponent } from 'src/app/domain/contact-image/contact-image.component';



@NgModule({
  declarations: [ContactComponent,ContactImageComponent,ContactInfoComponent,FormComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CarouselModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage
    ]
})
export class ContactModule { }
