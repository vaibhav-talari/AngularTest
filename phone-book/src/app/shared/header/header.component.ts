import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  arrayitem: Object[];
  digi:number = 12;


  constructor() {
    this.arrayitem=[{name:'Home',link:1},{name:'navigator',link:2},{name:"goto",link:3}];
  }

  ngOnInit() {
  }

}
