import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  languages: any[] = [
    { code: 'en', img: 'assets/images/header/great-britain.png' },
    { code: 'de', img: 'assets/images/header/germany.png' },
    { code: 'mk', img: 'assets/images/header/macedonia.png' },
    { code: 'bg', img: 'assets/images/header/bulgaria.png' }
  ];

  constructor(private translate:TranslateService){
    this.initLanguage();
  }

  initLanguage() {
    const urlLanguage = window.location.pathname.split('/')[1];
    const localStorageLanguage = localStorage.getItem('language');
    let language = 'en';

    if (this.isValidLanguage(urlLanguage)) {
      language = urlLanguage;
    } else if (localStorageLanguage && this.isValidLanguage(localStorageLanguage)) {
      language = localStorageLanguage;
    }

    this.translate.use(language);
    localStorage.setItem('language', language);
  }

  isValidLanguage(lang: string): boolean {
    return this.languages.some((language: any) => language.code === lang);
  }
}
