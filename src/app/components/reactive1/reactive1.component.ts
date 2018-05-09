import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-reactive1',
  templateUrl: './reactive1.component.html',
  styleUrls: ['./reactive1.component.css']
})
export class Reactive1Component implements OnInit {
  form_array=[1];



  selected;

  constructor() { }

  ngOnInit() {

  }

   duplicate(){
    this.form_array.push(1)
  }
  addComponent(){
    console.log(this.selected);
  }

}
