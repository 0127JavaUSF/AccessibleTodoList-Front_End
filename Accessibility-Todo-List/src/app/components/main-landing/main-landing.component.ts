import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-landing',
  templateUrl: './main-landing.component.html',
  styleUrls: ['./main-landing.component.css']
})
export class MainLandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toArial(){
    window.document.getElementsByTagName('body')[0].setAttribute("style","font-family:Arial,Sans-serif;");    
  }

  toCourier(){
    window.document.getElementsByTagName('body')[0].setAttribute("style","font-family:Courier;monospace");    
  }

 toHelvetica(){
    window.document.getElementsByTagName('body')[0].setAttribute("style","font-family:Helvetica, sans-serif;");    
  }

  toVerdana(){
    window.document.getElementsByTagName('body')[0].setAttribute("style","font-family:Verdana, sans-serif;");    
  }
/*
  private fontSize = 100;
  increaseFontSize(){
      this.fontSize += 20;      
      window.document.getElementsByTagName("body")[0].setAttribute("style",`font-size:${this.fontSize}%;`);
  }

  decreaseFontSize(){
      this.fontSize -= 20;
      window.document.getElementsByTagName("body")[0].setAttribute("style",`font-size:${this.fontSize}%;`);
  }
*/



}
