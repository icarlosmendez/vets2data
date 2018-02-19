
// Modules
import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule, Routes }     from '@angular/router';

// Components
import { WelcomeComponent }         from './welcome/welcome.component';
import { MissionComponent }         from './mission/mission.component';
import { TrainingComponent }        from './training/training.component';
import { BlogComponent }            from './blog/blog.component';
import { ContactComponent }         from './contact/contact.component';
import { SignupComponent }          from './signup/signup.component';
import { SigninComponent }          from './signin/signin.component';
import { SigninEmailFormComponent } from './signin-email-form/signin-email-form.component';
import { ProfileComponent }         from './profile/profile.component';


const routes: Routes = [
    // The order of the routes in the configuration matters and this is by design. 
    // The router uses a first-match wins strategy when matching routes, 
    // so more specific routes should be placed above less specific routes.
    {
        // default route utilizing a redirect 
        // activated when the app root is targeted
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'mission',
        component: MissionComponent
    },
    {
        path: 'training',
        component: TrainingComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: 'signin-email-form',
        component: SigninEmailFormComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
];


@NgModule({
    // adding the common module to try and resolve routing issues after build --prod
    // reference: https://github.com/angular/angular/issues/13948
    imports: [ CommonModule,
                RouterModule.forRoot(routes, {
                    useHash: false, // <-- leave as false as we don't want to use HashLocationStrategy but PathLocationStrategy instead
                    enableTracing: true // <-- debugging purposes only
                }) ],
    exports: [ CommonModule,
               RouterModule ]

})

export class AppRoutingModule { }
