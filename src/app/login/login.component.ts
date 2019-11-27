import { Component, OnInit } from '@angular/core';
import { MainloginComponent } from '../mainlogin/mainlogin.component';
import { Login2Component } from '../login2/login2.component';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  createdEmail:any = ""
  submitted = false
  status:any
  email:string
  login:FormGroup
  login1:FormGroup
  message:object
  password = false
  mobile  = false
 newpassword = false
  
    constructor(private formbuilder:FormBuilder, private app:MainloginComponent,  private api:ApiserviceService) {
      this.login =  formbuilder.group({
          Email:['']
      })
      this.login1 = formbuilder.group({
        "action":"Checkuser",
        "data":this.login
      })
     }
  
  
    ngOnInit() {
      
    }

   continue(){
      this.submitted = true
      if(!this.login.invalid){
      this.api.apicall('http://localhost:8080/prizm_api/api.php',this.login1.value)
      .subscribe(res=>{
        this.message = res
        if(this.message['status'] === 1){
          this.password = true
        }
        else {
          this.app.login2 = true;
          this.app.login = false;
       }
      })
    }
    
  }

}

