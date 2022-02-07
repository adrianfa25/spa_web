import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() selectLang:any;
  title = 'farji-tec';

  constructor(
    public translate: TranslateService
  ){
    this.translate.addLangs(['es', 'en', 'pt']);
    this.translate.setDefaultLang('es');

  }

  getLang(lang:any){
    console.log(lang+" Desde app");
    this.translate.use(lang);
  }


}
