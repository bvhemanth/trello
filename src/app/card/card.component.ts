import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('date') date:any;
  @Input('item') item:any;
  @Input('idx') idx:any;
  @Input('tdx') tdx:any;
  @Output() sendindex = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.date)
  }

  removeT(idx:any,tdx:any){
    let data:any={idx:idx,tdx:tdx}
    this.sendindex.emit(data);
  }
}
