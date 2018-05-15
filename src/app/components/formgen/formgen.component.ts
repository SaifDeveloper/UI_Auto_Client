import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {PopulateService} from '../../services/populate.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {DialogService} from '../../services/dialog.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-formgen',
  templateUrl: './formgen.component.html',
  styleUrls: ['./formgen.component.css']
})
export class FormgenComponent implements OnInit {


  components=[];

  data=[];

  select;label="saif";placeholder="ali";
  element;

  constructor(private populate:PopulateService,private dialogService:DialogService,public dialog: MatDialog) { }

  ngOnInit() {
    this.components = this.populate.getElements();
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
  }

  deleteElement(element){
    for(let i=0;i<this.components.length;i++) {
      if(this.components[i].select == element){
        this.components.splice(i,1);
      }
    }
    this.populate.deleteElement(element);

  }

  // openDialog(element){
  //   this.dialogService.openDialog(element)
  // }
  openDialog(element){
    this.element=element;
    localStorage.setItem('currentelement',this.element);
    // console.log("IN dialog Service:",element)
    // this.dialog.openDialog(element)
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
      height:'600px',
      data:{}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data.push(JSON.parse(localStorage.getItem('generated_json')));
      console.log("Data:",this.data);
    });

  }



}
