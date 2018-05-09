import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {PopulateService} from '../../services/populate.service';


@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  components=[];
  select;label="saif";placeholder="ali";

  constructor(private populate:PopulateService) { }

  ngOnInit() {
    this.components = this.populate.getElements();
  }


  add(){
    console.log("Select:",this.select);
    console.log("label:",this.label);
    console.log("placeholder:",this.placeholder);
    let newElement = {
      select:this.select,
      label:this.label,
      placeholder:this.placeholder
    };
    console.log("NEW ELEMENT:",newElement);
    this.components.push(newElement);
    console.log("COMPONENTS",this.components);
    this.populate.addElement(newElement)
  }

  deleteElement(element){
    for(let i=0;i<this.components.length;i++) {
      if(this.components[i].select == element){
        this.components.splice(i,1);
      }
    }
    this.populate.deleteElement(element);

  }


  displayedColumns = ['position', 'name', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }



}
export interface Element {
  name: string;
  position: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', symbol: 'H'},
  {position: 2, name: 'Helium', symbol: 'He'},
  {position: 3, name: 'Lithium', symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
];


