
import { Component, OnInit }  from '@angular/core';
import { FormBuilder,
         FormControl,  
         FormGroup, 
         Validators }         from '@angular/forms';
import { Router }             from '@angular/router';
import * as firebase          from 'firebase/app';
import { environment }        from '../../environments/environment';

// Not clear as to whether I need the User class or not yet?
import { User }               from '../user';


@Component({
    selector: 'app-signin-email-form',
    templateUrl: './signin-email-form.component.html',
    styleUrls: ['./signin-email-form.component.scss']
})

export class SigninEmailFormComponent implements OnInit {

    email = new FormControl('', [Validators.required, Validators.email]);

    error: any;
    
    constructor(private router: Router) { 

    }

    // When loading the page, go ahead and check to see if there is a 
    // Firebase instance running since we'll need it to submit the form
    ngOnInit() {
        
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

    }

    
    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }

    
    signinEmailForm() {

        const emailVal = document.getElementById('email');
        const passwordVal = document.getElementById('password');
        const email = emailVal.value;
        const password = passwordVal.value;
        const router = this.router;
        const user = firebase

        // Call the Firebase Auth method passing in the email and password values from the form
        firebase.auth().signInWithEmailAndPassword(email, password)

        // Quick check to see if sign in was successful
        .then(function(result) {

            if(!firebase.auth.length) {
                // If not then log this
                console.log('DEBUG: Not really sure yet...');
                
            } else {
                // If so then log this and then
                console.log('DEBUG: The user has been successfully signed in.');
                // Redirect the user to the home page
                router.navigate(['/welcome']);

            }

        }) 
    
        .catch(function(error) {
            
            // Handle Errors here.
            // For a list of error codes have a look at the Auth Reference Docs.
            // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword

            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode === 'auth/wrong-password') {
                alert('The password you entered is incorrect. Please re-enter your password.');

            } else if (errorCode === 'auth/invalid-email') {
                alert('The email address you entered is not valid. Please re-enter your email.')
            
            } else if (errorCode === 'auth/user-not-found') {
                alert('User not found.');
            
            } else if (errorCode === 'auth/user-disabled') {
                alert('This user account has been disabled. Please contact the site administrator')

            } else {
                console.log(errorMessage);
            }
            
        })

        // Provide an indication of whether the sign in was successful
        // firebase.auth().onAuthStateChanged(currentUser => {
        
        //     if(currentUser) {
                
        //         console.log("DEBUG: " + currentUser + " is signed in!");

        //     } else {
                
        //         console.log("DEBUG: Not signed in");

        //     }
        // })
    }
}
