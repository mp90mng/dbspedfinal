import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient, private languageService: LanguageService) { }


  private getBaseUrl(): string {
    const lang = this.languageService.getCurrentLanguage(); 
    switch (lang) {
      case 'en':
        return 'https://dbsped.com/en/contact';
      case 'de':
        return 'https://dbsped.com/de/kontakt';
      case 'mk':
        return 'https://dbsped.com/mk/kontakt';
      case 'bg':
        return 'https://dbsped.com/bg/kontakt';
      default:
        return 'https://dbsped.com/en/contact'; 
    }
  }

  sendMail(name: string, email: string, phone: string, message: string) {
    const baseUrl = this.getBaseUrl();
    const data = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };
    return this.http.post(baseUrl, data);
  }


}
