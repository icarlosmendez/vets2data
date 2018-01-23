import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})

export class CopyrightComponent implements OnInit {

    copyright_date = Date.now();
    fixedTimezone = '+0500';
    
    constructor() { }

    ngOnInit() {
        
    }

}
