import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display/display.component.html',
  styleUrls: ['./display/display.component.css']
})


export class DisplayComponent implements OnInit {


  private somePath : string ;

  constructor() { 

    this.somePath = "file:///C:/Users/Lisbon-03/Pictures/badIcons.png";

  }

  getUrl(){

    return this.somePath ;

  }

  ngOnInit() {

    console.log("DisplayComponent inited");
    
    
  }

}
