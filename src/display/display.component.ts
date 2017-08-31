import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-display',
  templateUrl: './display/display.component.html',
  styleUrls: ['./display/display.component.css']
})


export class DisplayComponent implements OnInit {

  @Input()
  somePath : string ;

  constructor() { 

    //set temporarily
    this.somePath = "file:///C:/Users/Lisbon-03/Pictures/badIcons.png";

  }

  getUrl(){

    return this.somePath ;

  }

  ngOnInit() {

    console.log("DisplayComponent inited");
    
    
  }

}
