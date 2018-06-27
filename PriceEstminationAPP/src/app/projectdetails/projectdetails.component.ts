import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../services/resources.service';
import { ResourceType, ResourceSizes } from 'src/app/ResourceType';
import { ProjectDetails } from './ProjectDetails';
import { ResourceDetails } from './ResourceDetails';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {
  resourcesList: ResourceType[];
  projectDetails: ProjectDetails;
  resourceDetails:ResourceDetails[]=[];
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
  selectedResourceType: any = "Select";
  selectedResourceSize: any = "Select";
  selectedResourceSizes: ResourceSizes[] = [];
  defaultSelectedSize: string[] =[];
  selectedResourceSizeDesc: string;
  constructor(private resourcesService: ResourcesService) { }

  ngOnInit() {

    this.projectDetails=new ProjectDetails();
    this.projectDetails.Resourses=this.resourceDetails;
    this.addNewResource();
    this.resourcesService.getJSON().subscribe(data => {
      this.resourcesList = data.Resource;
    });
  }
  addNewResource()
  {
    this.resourceDetails.push(
      {Type:'Select',Size:'Select',Description:'',Price:'0',Sizes:[]}
    );
  }
  GetResourceSizes(value,i) {
    debugger;
    this.resourceDetails[i].Size = "Select";
    this.resourceDetails[i].Description = "";
    if (this.resourcesList.find(x => x.Type == value).Sizes != undefined && this.resourcesList.find(x => x.Type == value).Sizes.length > 0) {
      this.resourceDetails[i].Sizes = this.resourcesList.find(x => x.Type == value).Sizes;
    }
    else {
      this.resourceDetails[i].Sizes = [];
      this.resourceDetails[i].Size = "N/A";
      this.resourceDetails[i].Description = "N/A";
    }
  }
  GetResourceSizeDescription(value,resourceDetails) {
    resourceDetails.Description = this.resourcesList.find(x => x.Type == resourceDetails.Type).Sizes
                                                    .find(size => size.Size == value).Description;
    if (resourceDetails.Description == undefined)
    resourceDetails.Description = "";
  }
  Delete(i)
  {
    this.resourceDetails.splice(i,1);
  }
}
