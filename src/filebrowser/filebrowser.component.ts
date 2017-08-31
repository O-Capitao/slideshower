import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-browser',
  templateUrl: './filebrowser/filebrowser.component.html',
  styleUrls: ['./filebrowser/filebrowser.component.css']
})


export class FileBrowserComponent implements OnInit {

  @Input()
  currentFileUrl : string ;


  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();


  constructor() { 
    
    this.currentFileUrl = "";

  }

  public setCurrentFileUrl( targetFileUrl: string ) : void{

      this.currentFileUrl = targetFileUrl;
      this.change.emit( this.currentFileUrl );

  }



  update(){
    this.setCurrentFileUrl("/path/to/some/shit");
    console.log("Things were updated");
  }

  ngOnInit() {

      console.log("FileBrowserComponent inited");
      
    
  }

}
