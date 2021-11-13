import { Component, OnInit } from '@angular/core';
import { SideMenuBarComponent } from '../side-menu-bar/side-menu-bar.component';

var opened:boolean;

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    opened = false;
  }

  openSideMenu(): void {
    if(opened){

    } else {

    }
    opened = !opened;
    console.log(opened)
  }

}
