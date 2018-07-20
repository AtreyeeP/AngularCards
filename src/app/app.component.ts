import { Component } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MatDialog, MatDialogRef } from '@angular/material';
import {DialogComponent } from './dialog/dialog.component';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

import 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  	myData: Array<any>;
 	
	dialogRef: MatDialogRef<DialogComponent>;

	constructor(private http:Http, private dialog: MatDialog, private dragula: DragulaService){
 			this.http.get('https://jsonplaceholder.typicode.com/photos')
 			.map(response => response.json()) .subscribe(res => this.myData = res);

			dragula.setOptions('bag-cards',{});
			dragula.dropModel.subscribe((value) =>{
			this.onDropModel(value);
			});
	} 
	
	private onDropModel(args){
		for( var i=0;i<10;i++){
			console.log(this.myData[i].id);
		}
		//console.log(args);	
}

	openDialog(){
		this.dialogRef = this.dialog.open(DialogComponent, {
      	hasBackdrop: true});
	}
	
}
