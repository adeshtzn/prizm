import { Component, OnInit } from '@angular/core';
import { MainloginComponent } from '../mainlogin/mainlogin.component';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.sass']
})
export class Login1Component implements OnInit {

  constructor(private app:MainloginComponent) { }

  ngOnInit() {
  }
login(){
  this.app.login1 = false;
  this.app.login2 = true;
}
}
