import { Component, OnInit } from '@angular/core';
import loginJsonData from '../login.json';

@Component({
  selector: 'app-login',
  template: '<p id="login-page"></p>',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  txt: string;
  data = loginJsonData;
  constructor() { 
    this.txt = "";
  }

  ngOnInit() {
    for (var i in this.data) {
      if(this.data[i].Type != "button")
      {
        this.txt += "<div>";
        this.txt += "<label>" + this.data[i].Label + "</label>";
        this.txt += "<input type ="+ this.data[i].Type+">" ;
        this.txt += "</div>";  
      }    
    }
    this.txt += "<button type ="+ this.data[i].Type+">" + this.data[i].Label + "</button>";
    document.getElementById("login-page").innerHTML = this.txt;
  }
}
