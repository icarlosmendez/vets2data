
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
    selector         : 'app-signup',
    templateUrl      : './signup.component.html',
    styleUrls        : ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    state: string = '';
    error: any;
    
    constructor(public afAuth: AngularFireAuth, private router: Router) { 

    }
    
    newUserEmailPassword(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        
        .catch(function(error) {
            
            // Handle Errors here.
            // For a list of error codes have a look at the Auth Reference Docs.
            // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword
            var errorCode = error.code;
            var errorMessage = error.message;
            
        });
    }

    ngOnInit() {
    
    }

}
