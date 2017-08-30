import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-browser',
  templateUrl: './filebrowser/filebrowser.component.html',
  styleUrls: ['./filebrowser/filebrowser.component.css']
})


export class FileBrowserComponent implements OnInit {

  private currentFileUrl : string ;
  private inputString: string;


  constructor() { 
    
    this.currentFileUrl = "";

  }

  public setCurrentFileUrl( targetFileUrl: string ) : void{

      this.currentFileUrl = targetFileUrl;

  }


  ngOnInit() {

      console.log("FileBrowserComponent inited");
      
    
  }

}
