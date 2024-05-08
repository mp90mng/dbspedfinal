import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeModule } from './routes/home/home.module';
import { AboutModule } from './routes/about/about.module';
import { ServicesModule } from './routes/services/services.module';
import { ContactModule } from './routes/contact/contact.module';
import { NotFoundComponent } from './domain/not-found/not-found.component';
import { NgOptimizedImage } from '@angular/common';


export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ServicesModule,
    ContactModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    TranslateModule.forRoot({
      loader: {
        provide:TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
