import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';

import { FormsModule }   from '@angular/forms';

import { DisplayComponent } from './display/display.component';
import { FileBrowserComponent } from './filebrowser/filebrowser.component';

@Component({
  selector: 'App',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'] /*,
  directives: [ DisplayComponent, FileBrowserComponent ]*/
})


export class AppComponent implements OnInit{


  @ViewChild( DisplayComponent ) display : DisplayComponent;
  @ViewChild( FileBrowserComponent ) filebrowser : FileBrowserComponent;

  

  ngOnInit(){

    console.log("AppComponent inited");
    
  }



}

@NgModule({
  imports: [BrowserModule,
          FormsModule],
  declarations: [AppComponent, 
                 DisplayComponent, 
                 FileBrowserComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }