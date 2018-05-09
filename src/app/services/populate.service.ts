import { Injectable } from '@angular/core';
import {Init} from '../shared/init_todos';

@Injectable()
export class PopulateService extends Init{


  constructor() {
    super();
    console.log('ElementService Initialized...')
    this.load();
  }

  getElements() {
    let elements = JSON.parse(localStorage.getItem('elements'));
    return elements;
  }

  addElement(newElement) {
    console.log("inside addTodo...newTodo:",newElement);

    // let todos = [];
    // localStorage.setItem('todos',JSON.stringify(todos));
    //
    let element = JSON.parse(localStorage.getItem('elements'));
    //Add New Element
    element.push(newElement);
    //Set New Todos
    localStorage.setItem('elements', JSON.stringify(element));
  }

  deleteElement(element) {
    console.log("service delete element!")
    let elements = JSON.parse(localStorage.getItem('elements'));

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].select == element) {
        elements.splice(i, 1);
      }
    }
    //Set New Todos
    localStorage.setItem('elements', JSON.stringify(elements));
  }

}
