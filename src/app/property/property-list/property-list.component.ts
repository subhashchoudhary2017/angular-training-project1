import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../property.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: IProperty[];
  SellRent:number = 1;
  constructor(private housingService:HousingService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
        console.log(data)
        this.properties = data as IProperty[];
        console.log(this.route.snapshot.url.toString());
      },
      error => console.log(error),
    )
  }

}
