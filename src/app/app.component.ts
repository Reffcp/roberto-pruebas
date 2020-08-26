import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private dataSer:DataService){}
  title = 'roberto-pruebas';
  data:any=[];
  data1:any=[];
  data2:any=[];
  data3:any=[];
  data4:any=[];
  columns:any=[];

  ngOnInit(){
    this.data=this.dataSer.getData();
    this.data1.status = false;
    this.data2.status = false;
    this.data3.status = false; 
    this.data4.status = false;

    /* this.columns=Object.keys(this.data[0]); */
    console.log(this.data);
    
  }
}
