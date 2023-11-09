import { Component } from '@angular/core';
import { ITask } from '../../task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    tasks: ITask[] = [
      {
        id: 1,
        text: "Go to the GYM",
        isDone: false,
        isImportant: true,
        deadline: new Date("2023-11-10")
      },
      {
        id: 2,
        text: "Go to the store",
        isDone: false,
        isImportant: false,
        deadline: new Date("2023-11-11")
    }
  ]

  makeDone(event: Event, task: ITask): void {
    const target = event.target as HTMLImageElement;

    if (task.isDone) {
      task.isDone = false;
      target.parentElement?.classList.remove("done");
    }
    else {
      task.isDone = true;
      target.parentElement?.classList.add("done");
    } 
  }
}