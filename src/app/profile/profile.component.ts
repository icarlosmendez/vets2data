
import { Component, OnInit } from '@angular/core';
import * as firebase          from 'firebase/app';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit {

    constructor() { 

    }

    
    profile() {

        // var user = firebase.auth().currentUser;
        // var name, email, photoUrl, uid, emailVerified;
        firebase.auth().onAuthStateChanged(function(user) {

            if (user) {
                // User is signed in
                var displayName = user.displayName;            
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                // The user's ID, unique to the Firebase project. Do NOT use
                // this value to authenticate with your backend server, if
                // you have one. Use User.getToken() instead.
                var uid = user.uid;  
                var phoneNumber = user.phoneNumber;
                var providerData = user.providerData;
                
                user.getIdToken()
                
                    .then(function(accessToken) {
                        document.getElementById('sign-in-status').textContent = 'Signed in';
                        // document.getElementById('sign-in').textContent = 'Sign out';
                        document.getElementById('account-details').textContent = JSON.stringify({
                            displayName: displayName,
                            email: email,
                            emailVerified: emailVerified,
                            phoneNumber: phoneNumber,
                            photoURL: photoURL,
                            uid: uid,
                            accessToken: accessToken,
                            providerData: providerData
                        }, null, '  ');
                    });
            
            } else {
            
                // User is signed out.
                document.getElementById('sign-in-status').textContent = 'Signed out';
                // document.getElementById('sign-in').textContent = 'Sign in';
                document.getElementById('account-details').textContent = 'null';
            }
        
        }, function(error) {

            console.log(error);
        
        });
     
                    
                
            
        
        

    }
    

    ngOnInit() {

        this.profile();
    
    }
}
