import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  changeState :string = '';
  onChangeLink(e){
    this.changeState = e;
  }
}
