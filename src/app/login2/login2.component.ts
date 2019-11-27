import { Component, OnInit } from '@angular/core';
import { MainloginComponent } from '../mainlogin/mainlogin.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.sass']
})

export class Login2Component implements OnInit {
 
  carryForwardedEmail:any =""
  constructor(private app:MainloginComponent , public login:LoginComponent ) { }

  ngOnInit() {
    this.carryForwardedEmail = this.login.createdEmail
    console.log(this.login.createdEmail)
    console.log(this.carryForwardedEmail)
  

  }
  oncall(){
    this.carryForwardedEmail = this.login.createdEmail
    console.log(this.login.createdEmail)
    console.log(this.carryForwardedEmail)
  }
signup(){
  this.app.login2 = false;
  this.app.login3 = true;
}
}
