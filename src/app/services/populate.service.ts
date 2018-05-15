import {Injectable, OnInit} from '@angular/core';
import {Init} from '../shared/init_todos';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class PopulateService extends Init implements OnInit{

  ngOnInit() {


  }



  constructor(private httpService: HttpClient) {
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

    let element = JSON.parse(localStorage.getItem('elements'));
    //Add New Element
    element.push(newElement);
    //Set New Elements
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
