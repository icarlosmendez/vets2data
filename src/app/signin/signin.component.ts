import { Component, OnInit, HostBinding }     from '@angular/core';
import { AngularFireAuth }                    from 'angularfire2/auth';
import * as firebase                          from 'firebase/app';
import { Router }                             from '@angular/router';
import { environment }                        from '../../environments/environment';


@Component({
    selector        : 'app-signin',
    templateUrl     : './signin.component.html',
    styleUrls       : ['./signin.component.scss']
})


// const auth = firebase.auth();

export class SigninComponent implements OnInit {

    error: any;

    constructor(private router: Router) { 
        
    }


    loginGithub() {

        firebase.initializeApp(environment.firebase);

        // Define the 'provider' variable for use in this method
        // create a new instance of the GithubAuthProvider
        var provider = new firebase.auth.GithubAuthProvider();
            // limit or define the scope of the authorization
            provider.addScope('user');
            // add custom params to define user actions
            provider.setCustomParameters({
                'allow_signup': 'false'
            });
        
        // call the signin method for the provider using a redirect 
        // redirects are the preferred method on mobile devices
        firebase.auth().signInWithRedirect(provider).then(function(result) {
            
            // This gives you a GitHub Access Token.
            // The token can be used to access the GitHub API.
            var token = result.credential.accessToken;
            
            // The signed-in users info.
            var user = result.user;

            console.log('The user' + user + 'has been issued the following token by Github: ' + token);

            if(token) {
                console.log('The user' + user + 'has been issued the following token by Github: ' + token);
                this.router.navigate(['/welcome']);
            };
            

        
        }).catch(function(error) {
            
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
    

    ngOnInit() {
        // firebase.initializeApp(environment.firebase, 'vets2data');
    }

}
