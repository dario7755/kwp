import { Component } from '@angular/core';

import { FileMetadata } from './classes/file-metadata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {    
  podatci = [    
	new FileMetadata ( 'todo','docx', '5/1/19, 8:38 PM', 0.01 ),    
	new FileMetadata ( '1','png','5/1/19, 8:38 PM', 0 ),
	new FileMetadata ( 'Hey Brother','mp3','5/1/19, 8:38 PM', 9.98 ),
	new FileMetadata ( 'us_2018','xlsx','5/1/19, 8:38 PM', 0.02 ),
	new FileMetadata ( 'OM_predlozak','pptx','5/1/19, 8:38 PM', 0.96 )
  ];  
  myFile1n = this.podatci[0].name;
  myFile1a = this.podatci[0].added;
  myFile1s = this.podatci[0].size;
  myFile1t = this.podatci[0].tip;
}
