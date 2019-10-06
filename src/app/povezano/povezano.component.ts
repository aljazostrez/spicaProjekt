import { Component, OnInit } from '@angular/core';
import { NastavitveComponent } from '../nastavitve/nastavitve.component';

@Component({
  selector: 'app-povezano',
  templateUrl: './povezano.component.html',
  styleUrls: ['./povezano.component.css']
})
export class PovezanoComponent implements OnInit {

  URL: string;

  constructor(
    private nastavitve: NastavitveComponent
  ) {
    this.URL = localStorage.getItem("url");
  }

  ngOnInit() {
  }

  disconnect(): void {
    localStorage.clear();
    this.nastavitve.connectedToAPI = false;
  }

}
