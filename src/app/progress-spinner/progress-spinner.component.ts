import { Component, OnInit } from '@angular/core';
import * as $ from 'jQuery';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})

export class ProgressSpinnerComponent implements OnInit {

    constructor() { }

    // hideSpinner() {
    //     $('#mat-spinner').hide();
    // }

    showSpinner() {

        $("#mat-spinner").addClass(".app-loading .spinner");
        console.log("Spinner Shown");

        $(document).ready(
            function() {
                console.log("Document is ready...");
                
                $("#mat-spinner").removeClass(".app-loading .spinner")
                console.log("Spinner Hidden");
            }
        )
        
        // return new Promise(
        //     (resolve, reject) => {

        //         $(document).ready(
        //             function() {
        //                 console.log("Document is ready...");
        //                 resolve();
                    
        //             }
        //         )
        //     }
        // )
        // .then(
        //     $("#mat-spinner").removeClass(".app-loading")
        // )
        // .then(
        //     function() {
        //         console.log("Spinner Hidden");
        //     }
        // );
    }

    ngOnInit() {
        this.showSpinner();
    }

}
