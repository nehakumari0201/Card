import { Component, OnInit } from '@angular/core';
import { DetailsService, IDetails } from '../details.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
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
