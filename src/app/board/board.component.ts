import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  lists: any[] = [];

  constructor() { }

  ngOnInit(): void {
    let previous:any = localStorage.getItem('lists');
    if(JSON.parse(previous).length>0){
      this.lists=JSON.parse(previous);
    }
  }

  addList() {
    this.lists.push({'items':[]});
    this.setStore();
  }
  onSubmit(newItemForm: NgForm,i:number) {
    this.lists[i]['items'].push(newItemForm.value.newItem);
    this.setStore();
    newItemForm.reset();
  }
  removeC(index:number){
    this.lists.splice(index,1)
    this.setStore();
  }
  removeT(p:number,c:number){
    this.lists[p].items.splice(c,1);
    this.setStore()
  }
  drop(event: CdkDragDrop<string[]>,index:number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        this.setStore();   
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        this.setStore();
    }
  }
  setStore(){
    localStorage.setItem('lists',JSON.stringify(this.lists))
  }
}
