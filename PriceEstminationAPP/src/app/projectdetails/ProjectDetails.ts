import { ResourceDetails } from "./ResourceDetails";

export class ProjectDetails
{
    Client:string;
    Project:string;
    Product:string;
    CreatedDate:string;
    ProjectManager:string;
    PMEmailID:string;
    SizingBy:string;
    SizedByEmailID:string;
    QuoteCreatedBy:string;
    QuotedByEmailID:string;
    Resourses:ResourceDetails[];
}