import { Component, OnInit, Output, EventEmitter } from '@angular/core';

var require: any;
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() setLang = new EventEmitter();
  public lang: any;

  constructor() { 
    this.lang = 'es';
  }

  ngOnInit(): void {
    this.setLang.emit(this.lang);
  }

  selectLang(lang:any){
    console.log(lang);
    this.setLang.emit(lang);
  }
}
