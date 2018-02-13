import { Component, OnInit, HostBinding }     from '@angular/core';
import { Router }                             from '@angular/router';
import * as firebase                          from 'firebase/app';
import { environment }                        from '../../environments/environment';


@Component({
    selector        : 'app-signin',
    templateUrl     : './signin.component.html',
    styleUrls       : ['./signin.component.scss']
})


export class SigninComponent implements OnInit {

    error: any;

    constructor(private router: Router) { 
        
    }


    signinGithub() {

        // make the router available inside the method
        const router = this.router;

        // Define the 'provider' variable for use in this method
        // create a new instance of the GithubAuthProvider
        var provider = new firebase.auth.GithubAuthProvider();
            // limit or define the scope of the authorization
            provider.addScope('user, repo');
            // add custom params to define user actions
            provider.setCustomParameters({
                'allow_signup': 'true'
            });
        
        // call the signin method for the provider using a redirect 
        // redirects are the preferred method on mobile devices
        firebase.auth().signInWithPopup(provider)

        .then(function(result) {

            var user = firebase.auth().currentUser;
            // This gives you a GitHub Access Token.
            // The token can be used to access the GitHub API.
            var token = result.credential.accessToken;
            
            if (user) {

                console.log('DEBUG: The user ' + user.displayName + ' has been issued the following token by Github: ' + token);

                // Redirect the user to the home page after successful sign-in
                router.navigate(['/profile']);
            
            }
        
        })

        .catch(function(error) {
            
            // Handle any Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
            // Capture the email of the user's account for error reporting.
            var email = error.email;
            
            // Capture the firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            
            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('You have signed up with a different provider for that email.');
                // Handle linking here if your app allows it.
                // For a list of error codes have a look at the Auth Reference Docs.
                // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#getRedirectResult
            
            } else {
                console.error(error);
            
            }

        });

    }


    ngOnInit() { }

}
