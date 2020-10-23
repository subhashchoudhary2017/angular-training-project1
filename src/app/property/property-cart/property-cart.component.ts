import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-cart',
  templateUrl: './property-cart.component.html',
  styleUrls: ['./property-cart.component.scss']
})
export class PropertyCartComponent implements OnInit {
  property: any = {
    "Id": 1,
    "Type": "House",
    "Price": 2000000,
    "Name": "Birla House"
  }
  constructor() { }

  ngOnInit() {
  }

}
