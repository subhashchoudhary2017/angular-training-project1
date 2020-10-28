import { Component, OnInit, Input } from '@angular/core';
import { IProperty } from '../property.interface';

@Component({
  selector: 'app-property-cart',
  templateUrl: './property-cart.component.html',
  styleUrls: ['./property-cart.component.scss']
})
export class PropertyCartComponent implements OnInit {
  @Input() property: IProperty
  constructor() { }

  ngOnInit() {
  }

}
