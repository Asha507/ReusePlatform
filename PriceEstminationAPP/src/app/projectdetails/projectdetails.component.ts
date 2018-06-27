import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../services/resources.service';
import { ResourceType } from 'src/app/ResourceType';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {

  resourcesList:ResourceType[];
  client:string;
  project:string;
  product:string;
  CreatedDate:string;
  ProjectManager:string;
  PMEmailID:string;
  SizingBy:string;
  SizedByEmailID:string;
  QuoteCreatedBy:string;
  QuotedByEmailID:string;
  constructor(private resourcesService:ResourcesService) { }

  ngOnInit() {
    this.resourcesService.getJSON().subscribe(data=>{
this.resourcesList=data;
debugger;
    });
  }

}
