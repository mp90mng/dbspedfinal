import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './media_queries.scss']
})
export class HeaderComponent implements OnInit {
  selectedLanguageCode: string = 'en';
  isToggle: boolean = false;
  isHamburger: boolean = false;
  menuV: boolean = false;
  iconV: boolean = false;

  languages: any[] = [
    { code: 'en', img: 'assets/images/header/great-britain.png' },
    { code: 'de', img: 'assets/images/header/germany.png' },
    { code: 'mk', img: 'assets/images/header/macedonia.png' },
    { code: 'bg', img: 'assets/images/header/bulgaria.png' }
  ];

  constructor(
    private service: LanguageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      this.selectedLanguageCode = storedLanguage;
    } else {
      this.activatedRoute.queryParams.subscribe(params => {
        const langParam = params['lang'];
        if (langParam && this.isValidLanguage(langParam)) {
          this.selectedLanguageCode = langParam;
          localStorage.setItem('language', langParam);
        }
      });
    }
  }

  selectedLanguage(): any {
    return this.languages.find((lang) => lang.code === this.selectedLanguageCode);
  }

  switchLanguage(language: string) {
    this.selectedLanguageCode = language;
    this.service.switchLanguage(language);
    localStorage.setItem('language', language);

    let homeRoute: string;
    switch (language) {
      case 'en':
        homeRoute = '/en/home';
        break;
      case 'de':
        homeRoute = '/de/startseite';
        break;
      case 'mk':
        homeRoute = '/mk/naslovna';
        break;
      case 'bg':
        homeRoute = '/bg/nacalo';
        break;
      default:
        homeRoute = '/en/home';
        break;
    }

    this.router.navigateByUrl(homeRoute);
    this.isToggle = false;
    this.menuV = false;
    this.iconV = false;
  }

  isValidLanguage(lang: string): boolean {
    return this.languages.some(language => language.code === lang);
  }

  openLang(): void {
    this.isToggle = !this.isToggle;
  }

  hamburgerToggle(): void {
    this.menuV = !this.menuV;
    this.iconV = !this.iconV;
  }

  closeLang() {
    this.isToggle = false;
  }

  closeLangMobile() {
    this.isToggle = false;
    this.menuV = false;
    this.iconV = false;
  }

  closeMenu() {
    this.isToggle = false;
    this.menuV = false;
    this.iconV = false;
  }
}

