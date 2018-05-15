import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../components/formgen/dialog/dialog.component';



@Injectable()
export class DialogService {

  element;
  constructor(public dialog: MatDialog) { }

  // openDialog(element): void {
  //   this.element=element;
  //   let dialogRef = this.dialog.open(DialogComponent, {
  //     width: '450px',
  //     height:'600px'
  //   });
  //   console.log("IN dialog Service:",this.element)
  //   localStorage.setItem('currentelement',this.element);
  // }




  getElement(){
    return this.element;
  }


}
