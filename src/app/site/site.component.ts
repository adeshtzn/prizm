import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.sass']
})
export class SiteComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {

    $(window).on('load',function(){
      $(".sheet").hide();
    });
  }




}
 