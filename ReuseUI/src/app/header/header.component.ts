import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Base64} from 'js-base64';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    this.route.queryParams.pipe(filter(params=>'param' in params))
    .subscribe(params => {
      if(undefined != params)
      {
        let paramString=Base64.decode(params['param']).split(','); 
        sessionStorage.setItem("Name",paramString[0]);  
        sessionStorage.setItem("VamID",paramString[2]);
        sessionStorage.setItem("Designation",paramString[1]);  


      } 
    });     

   }

  ngOnInit() {
  }
  ToggleSidebar(event)
  {
    let sidebarele=event.currentTarget.closest('body');
   if(sidebarele.classList.contains('sidenav-toggled'))
   {
    sidebarele.classList.remove('sidenav-toggled');
   }
   else
   {
    sidebarele.classList.add('sidenav-toggled');
   }
  }
}
