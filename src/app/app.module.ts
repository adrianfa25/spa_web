import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Angular Materials */
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

/* Translate */
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OpenComponent } from './components/open/open.component';
import { Infosection1Component } from './components/infosection1/infosection1.component';
import { Infosection2Component } from './components/infosection2/infosection2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Infosection3Component } from './components/infosection3/infosection3.component';
import { Infosection4Component } from './components/infosection4/infosection4.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OpenComponent,
    Infosection1Component,
    Infosection2Component,
    Infosection3Component,
    Infosection4Component,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
