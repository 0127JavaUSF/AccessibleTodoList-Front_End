import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Accessibility-Todo-List';

  private fontSize = 100;
  increaseFontSize(){
      this.fontSize += 20;      
      window.document.getElementsByTagName("body")[0].setAttribute("style",`font-size:${this.fontSize}%;`);
  }

  decreaseFontSize(){
      this.fontSize -= 20;
      window.document.getElementsByTagName("body")[0].setAttribute("style",`font-size:${this.fontSize}%;`);
  }
}

