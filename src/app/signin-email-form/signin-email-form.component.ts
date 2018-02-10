import { Component, OnInit } from '@angular/core';
import { FormBuilder,
         FormControl,  
         FormGroup, 
         Validators }         from '@angular/forms';
// Not clear as to whether I need the User class or not yet?
import { User }               from '../user';


@Component({
    selector: 'app-signin-email-form',
    templateUrl: './signin-email-form.component.html',
    styleUrls: ['./signin-email-form.component.scss']
})

export class SigninEmailFormComponent implements OnInit {

    email = new FormControl('', [Validators.required, Validators.email]);
    
    constructor() { }

    ngOnInit() {
    
    }
    
    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }

    loginEmailPassword(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        
        .catch(function(error) {
            
            // Handle Errors here.
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
                alert(errorMessage);
            }
            
        });
    }

}
