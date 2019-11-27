import { Component, OnInit } from '@angular/core';
import { MainloginComponent } from '../mainlogin/mainlogin.component';

@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.sass']
})
export class Login3Component implements OnInit {

  constructor(private app:MainloginComponent) { }

  ngOnInit() {
  }
new(){
  this.app.login3 = false;
  this.app.login4 = true;

}
}
