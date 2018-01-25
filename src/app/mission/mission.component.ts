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
        $(document).ready(function() {

            $.getJSON('https://baconipsum.com/api/?callback=?', 
                { 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'5' }, 
                
                function(baconGoodness) {
                
                    if (baconGoodness && baconGoodness.length > 0) {
                        $("#baconIpsumOutput").html('');

                        for (var i = 0; i < baconGoodness.length; i++)
                            $("#baconIpsumOutput").append('<p>' + baconGoodness[i] + '</p>');
                        $("#baconIpsumOutput").show();
                    }
                }
            );
        
        });
    }

}
