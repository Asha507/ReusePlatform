import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../services/resources.service';
import { ResourceType, ResourceSizes } from 'src/app/ResourceType';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {

  resourcesList: ResourceType[];
  client: string;
  project: string;
  product: string;
  CreatedDate: string;
  ProjectManager: string;
  PMEmailID: string;
  SizingBy: string;
  SizedByEmailID: string;
  QuoteCreatedBy: string;
  QuotedByEmailID: string;
  selectedResourceType: any="Select";
  selectedResourceSize: any="Select";
  selectedResourceSizes:ResourceSizes[]=[];
  defaultSelectedSize:string="Select";
  constructor(private resourcesService: ResourcesService) { }

  ngOnInit() {
    this.resourcesService.getJSON().subscribe(data => {
      this.resourcesList = data.Resource;
    });
  }
  GetResourceSizes(value)
  {
    this.defaultSelectedSize="Select";
    if(this.resourcesList.find(x=>x.Type==value).Sizes!=undefined && this.resourcesList.find(x=>x.Type==value).Sizes.length>0)
    {
    this.selectedResourceSizes=this.resourcesList.find(x=>x.Type==value).Sizes;  
    }
    else{
      this.defaultSelectedSize="N/A";
    } 
  }
}
