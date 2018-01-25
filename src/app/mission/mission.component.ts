import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})

export class MissionComponent implements OnInit {

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
