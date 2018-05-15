import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {PopulateService} from '../../services/populate.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  components=[];

  select;label="saif";placeholder="ali";
  // ELEMENT_DATA = JSON.parse(localStorage.getItem('elements'));
  ELEMENT_DATA = this.elementData;
  constructor(private populate:PopulateService) { }

  ngOnInit() {
    this.components = this.populate.getElements();
    // this.updateTable()

  }

  get elementData() {
    this.ELEMENT_DATA = JSON.parse(localStorage.getItem('elements'));
    return this.ELEMENT_DATA;
  }

  updateTable(){
    this.ELEMENT_DATA=JSON.parse(localStorage.getItem('elements'));
    console.log("ELEMENT_DATA:",this.ELEMENT_DATA);
    console.log("TABLE UPDATED !!!")
  }

  add(){
    let newElement = {
      select:this.select,
      label:this.label,
      placeholder:this.placeholder
    };
    console.log("NEW ELEMENT:",newElement);
    this.components.push(newElement);
    console.log("COMPONENTS",this.components);
    this.populate.addElement(newElement);
    this.updateTable();
    // this.ELEMENT_DATA = this.components;
    console.log("Element data:",this.ELEMENT_DATA);
    console.log("Components:",this.components);
  }

  deleteElement(element){
    for(let i=0;i<this.components.length;i++) {
      if(this.components[i].select == element){
        this.components.splice(i,1);
      }
    }
    this.populate.deleteElement(element);

  }


  displayedColumns = ['label', 'select','action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }



}
// export interface Element {
//   element: string;
//   position: number;
// }




