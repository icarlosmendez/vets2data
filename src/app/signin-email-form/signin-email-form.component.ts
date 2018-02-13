
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

    ngOnInit() {

    }

    
    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }

    
    signinEmailForm() {

        const email = (<HTMLInputElement>document.getElementById('email')).value;
        const password = (<HTMLInputElement>document.getElementById('password')).value;
        const router = this.router;
        const user = firebase

        // Call the Firebase Auth method passing in the email and password values from the form
        firebase.auth().signInWithEmailAndPassword( email, password )

        // When the promise resolves 
        // indicating that sign in was successful
        .then(function(result) {

            // Redirect the user to the home page
            router.navigate(['/welcome']);

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

    }
}
