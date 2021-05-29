import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  _value: number = 0;
  _step: number = 1;
  _min: number = 0;
  _max: number = Infinity;
  _wrap: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
