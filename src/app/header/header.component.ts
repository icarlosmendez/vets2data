
import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';
import * as firebase          from 'firebase/app';
import * as $                 from 'jQuery';
import { environment }        from '../../environments/environment';


@Component({
    selector        : 'app-header',
    templateUrl     : './header.component.html',
    styleUrls       : ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

    constructor(private router: Router) {

    }

    ngOnInit() {

        // Check to see if there is an instance of the Firebase app running
        if (!firebase.apps.length) {
            // If not, indicate as much in the console for debugging purposes
            console.log("DEBUG: No running Firebase instance found. Instantiating now ...");
            // Instantiate the app
            firebase.initializeApp(environment.firebase)

        } else {
            // If an instance is found then indicate this in the console 
            console.log("DEBUG: Running Firebase instance found. Proceeding as usual ...");
            // Proceed with the desired functionality
            return;
        }


        // Define constants for the account controls in header
        const btnSignOut = document.getElementById('btnSignOut');
        const btnSignIn = document.getElementById('btnSignIn');
        const btnSignUp = document.getElementById('btnSignUp');

        // Watch for state change to determine if there is a logged in user
        // Depending on this fact display the appropriate account controls in header
        firebase.auth().onAuthStateChanged(currentUser => {

            var user = firebase.auth().currentUser;

            if(user != null) {
                var name = user.displayName;
                console.log("DEBUG: " + name + " signed in");
                
                $('#btnProfile').removeClass('hidden');
                $('#btnSignOut').removeClass('hidden');
                $('#btnSignIn').addClass('hidden');
                $('#btnSignUp').addClass('hidden');
            } else {
                console.log("DEBUG: No user signed in");
                
                $('#btnProfile').removeClass('hidden').addClass('hidden');
                $('#btnSignOut').removeClass('hidden').addClass('hidden');
                $('#btnSignIn').removeClass('hidden');
                $('#btnSignUp').removeClass('hidden');

            }

        })

    }


    logOut() {

        // make the router available inside the method
        const router = this.router;

        firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("DEBUG: Sign-out successful ...");
        // And then redirect the user to the home page
        router.navigate(['/welcome']);
        
        }).catch(function(error) {
        // An error happened.
        
        });
    }
}
