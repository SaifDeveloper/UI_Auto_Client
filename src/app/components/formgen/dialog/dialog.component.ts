import { Component, OnInit } from '@angular/core';
import {DialogService} from '../../../services/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  data =new Array();

  elements_array;
  current_element;
  form_array= new Array();
  listOfOptions= new Array()

  placeholder=[];label;

  _json=[];

  dummy= [];

 flag:boolean = true;
  constructor() {
    //localStorage.setItem('generated_json',JSON.stringify(this.dummy));
  }

  ngOnInit() {

    if (this.flag==true) {
      localStorage.setItem('generated_json', JSON.stringify([]));
    }

    this.current_element=localStorage.getItem('currentelement');
    console.log("Current Element:",this.current_element);
    this.elements_array=localStorage.getItem('elements');
  }
  duplicate(){
    this.form_array.push('')
  }

  save(current_element){
    console.log("current_element",current_element);
    console.log("Options:",this.listOfOptions);
    switch (this.current_element){
      case "Textarea":{
        this._json.push({
          type: this.current_element,
          number:1,
          placeholders:this.placeholder
        });
        this.flag = false;

        localStorage.setItem('generated_json',JSON.stringify(this._json));
        break;
      }
      case "Radio":{
        this._json=JSON.parse(localStorage.getItem('generated_json'));
        this._json.push({
          type: this.current_element,
          number:1,
          options:this.listOfOptions,
          values:[["1","2","3"]],
          placeholders:[["Select an option"]]
        });
        this.flag = false;
        localStorage.setItem('generated_json',JSON.stringify(this._json));
      }
    }
    let generated_json = JSON.parse(localStorage.getItem('generated_json'));
    console.log("Generated JSON:\n",generated_json);
    console.log("Flag:",this.flag);
    console.log("_JSON",this._json);
  }

}
