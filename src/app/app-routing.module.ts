import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule } from './routes/about/about.module';
import { NotFoundComponent } from './domain/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'en/home', pathMatch: 'full' },
  { path: 'en/home', loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule), title: 'DB International Sped' },
  { path: 'en/about', loadChildren: () => import('./routes/about/about.module').then(m => m.AboutModule), title: 'About' },
  {path: 'en/services', loadChildren:() => import('./routes/services/services.module').then(m => m.ServicesModule), title: 'Services'},
  {path: 'en/contact', loadChildren: () => import('./routes/contact/contact.module').then(m =>m.ContactModule) ,title: 'Contact'},


  {path: 'de/startseite', loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule), title: 'DB International Sped'},
  {path: 'de/überUns', loadChildren: () => import('./routes/about/about.module').then(m => m.AboutModule), title: 'Über Uns'},
  {path: 'de/services', loadChildren: () => import('./routes/services/services.module').then(m => m.ServicesModule), title: 'Services'},
  {path: 'de/kontakt', loadChildren: () => import('./routes/contact/contact.module').then(m => m.ContactModule),title: 'Kontakt'},

  {path: 'mk/naslovna', loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule),title: 'DB International Sped'},
  {path: 'mk/zanas', loadChildren: () => import('./routes/about/about.module').then(m => m.AboutModule),title: 'Za nas'},
  {path: 'mk/uslugi', loadChildren: () => import('./routes/services/services.module').then(m => m.ServicesModule),title: 'Uslugi'},
  {path: 'mk/kontakt', loadChildren: () => import('./routes/contact/contact.module').then(m => m.ContactModule),title: 'Kontakt'},

  {path: 'bg/nacalo', loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule),title: 'DB International Sped'},
  {path: 'bg/zanas', loadChildren: () => import('./routes/about/about.module').then(m => m.AboutModule),title: 'Za nas'},
  {path: 'bg/uslugi', loadChildren: () => import('./routes/services/services.module').then(m => m.ServicesModule),title: 'Uslugi'},
  {path: 'bg/kontakt', loadChildren: () => import('./routes/contact/contact.module').then(m => m.ContactModule),title: 'Kontakt'},
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

