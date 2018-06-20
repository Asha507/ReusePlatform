import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  name:string;
  designation:string;
  vamid:string;
  constructor() {
    this.name=sessionStorage.getItem("Name");
    this.designation=sessionStorage.getItem("Designation");
    this.vamid=sessionStorage.getItem("VamID");
   }

  ngOnInit() {
    $(document).ready(function(){
    /*   $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
      }); */
  });
  }

  test(event){
    let wrapper = event.currentTarget.closest('#wrapper');
    if(wrapper.classList.contains('toggled')){
      wrapper.classList.remove('toggled');
    }
    else{
      wrapper.classList.add('toggled');
    }
  }

}
