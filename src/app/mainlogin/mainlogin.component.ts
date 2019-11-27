import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-mainlogin',
  templateUrl: './mainlogin.component.html',
  styleUrls: ['./mainlogin.component.sass']
})
export class MainloginComponent implements OnInit {
 public status1: LoginComponent
 login= true
 login1= false
 login2= false
 login3= false
 login4= false

  constructor() {  }

  ngOnInit() {
  
   
  }

}
