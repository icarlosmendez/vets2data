import { Component, OnInit } from '@angular/core';
import * as firebase          from 'firebase/app';
import { environment }        from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnInit() {

        const btnSignOut = document.getElementById('btnSignOut');
        const btnSignIn = document.getElementById('btnSignIn');
        const btnSignUp = document.getElementById('btnSignUp');

        
        // Check to see if there is an instance of the Firebase app running
        if (!firebase.apps.length) {
            
            // If not, indicate as much in the console for debugging purposes
            console.log("DEBUG: No Firebase instance found running. Will instantiate...");
            
            // Instantiate the app
            firebase.initializeApp(environment.firebase)

        } else {

            // If an instance is found then indicate this in the console 
            console.log("DEBUG: Firebase instance found running. Proceeding as usual...");
            
            // Proceed with the desired functionality
            return;
        }


        // Provide an indication of whether the sign in was successful
        firebase.auth().onAuthStateChanged(currentUser => {
        
            if(currentUser) {
                console.log("DEBUG: " + currentUser + " is signed in!");
                jQuery(#btnSignOut).removeClass('hidden');
                jQuery(#btnSignIn).addClass('hidden');
                jQuery(#btnSignUp).addClass('hidden');
            } else {
                console.log("DEBUG: Not signed in");
                jQuery(#btnSignOut).removeClass('hidden');
                jQuery(#btnSignOut).addClass('hidden');
                jQuery(#btnSignIn).removeClass('hidden');
                jQuery(#btnSignUp).removeClass('hidden');

            }
        })
        
    }

    logOut() {
        firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("DEBUG: User is now logged out of the app...");
        
        }).catch(function(error) {
        // An error happened.
        
        });
    }
}
