import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('date') date:any;
  @Input('item') item:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.date)
  }

}
