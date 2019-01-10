import { Component, OnInit, Input } from '@angular/core';
import { strictEqual } from 'assert';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  listItems = [
    {
      content: "item one",
      selected: false
    },
    {
      content: "item two",
      selected: false,
    },
    {
      content: "item three",
      selected: false
    },
    {
      content: "item four",
      selected: false
    }
  ];

  public show: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  // formData.show = {};

  onClickMe() {
    this.show = !this.show;

    //this.formData.show = !this.formData.show;
  }
}


