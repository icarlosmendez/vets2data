import { Component, OnInit } from '@angular/core';
import { NgModule }          from '@angular/core';

/* Components */
import { AppComponent }      from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
    
    ]
})

export class WelcomeComponent implements OnInit {

    constructor() { }

    ngOnInit() { 
        // Bacon Ipsum API integration
        // AJAX call to API for some bacon
        // Add markup to page with id="baconIpsumOutput" and you got bacon!
        jQuery(document).ready(function() {

            jQuery.getJSON('https://baconipsum.com/api/?callback=?', 
                { 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'5' }, 
                
                function(baconGoodness) {
                
                    if (baconGoodness && baconGoodness.length > 0) {
                        jQuery("#baconIpsumOutput").html('');

                        for (var i = 0; i < baconGoodness.length; i++)
                            jQuery("#baconIpsumOutput").append('<p>' + baconGoodness[i] + '</p>');
                        jQuery("#baconIpsumOutput").show();
                    }
                }
            );
        
        });
    }
}
