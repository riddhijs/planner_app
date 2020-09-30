import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  

  // Transfer Items Between Lists
  AddedList = [
    {"id":1 ,"name":"Analyse Requirements", "calories":15},  
    {"id":2 ,"name":"On-Site Meeting", "calories": 12},
    {"id":3 ,"name":"Discussion with investor", "calories": 4},
    {"id":4 ,"name":"Documenting current system", "calories":20},
    {"id":5 ,"name":"Design a home page", "calories":6},
    {"id":6 ,"name":"Design a Database", "calories":18},
    {"id":7 ,"name":"Test the home page", "calories":2}, 
    {"id":8 ,"name":"Translate home page", "calories":4}, 
    {"id":9 ,"name":"Create ER diagram", "calories":7}, 
    
  ];

  DropList = [
  ];
   
  countcal;

  count(){
    let sum = 0;
    for(let i =0 ; i<this.DropList.length ; i++ ){
      
      sum += this.DropList[i].calories;
      this.countcal = sum;
     
    }
  }
  onDrop(event: CdkDragDrop<string[]>) {
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  
}
