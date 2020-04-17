import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.css']
})
export class HeaderPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //today = 345;
  today = new Date();
  
  items = (this.today+"").split(" ");
  date=this.items[0]+" "+this.items[1]+" "+this.items[2]+" "+this.items[3];
  

}
