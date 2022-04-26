import { IDetails, DetailsService } from './../details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
details:IDetails[]=[];
  constructor( private detailsService:DetailsService) { }

  ngOnInit(): void {
    this.getAll();
  }
getAll(){
  this.details=this.detailsService.getAll();
  console.log(this.details);
}
}
