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
  columns:any=[];
  ngOnInit(){
    this.data=this.dataSer.getData();
    this.columns=Object.keys(this.data[0]);
    console.log(this.columns);
    
  }
}
