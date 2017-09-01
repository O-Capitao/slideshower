import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-browser',
  templateUrl: './filebrowser/filebrowser.component.html',
  styleUrls: ['./filebrowser/filebrowser.component.css']
})


export class FileBrowserComponent implements OnInit {

  //@Input()
  currentFileUrl : string ;


  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();


  constructor() { 
    this.currentFileUrl = "";
  }


  emitUrl( value: string ){
    console.log("calling emitUrl()" );
    
    this.currentFileUrl = value ;
    this.change.emit( this.currentFileUrl );

  }

  clearTextbox(){
    this.emitUrl("");
  }

  ngOnInit() {
      console.log("FileBrowserComponent inited");
  }

}
