/* Angular Library Modules */
import { NgModule }                from '@angular/core';
import { FormsModule, 
         ReactiveFormsModule }     from '@angular/forms';
import { BrowserModule }           from '@angular/platform-browser';
import { MatAutocompleteModule,
         MatButtonModule,
         MatButtonToggleModule,
         MatCardModule,
         MatCheckboxModule,
         MatChipsModule,
         MatDatepickerModule,
         MatDialogModule,
         MatExpansionModule,
         MatGridListModule,
         MatIconModule,
         MatInputModule,
         MatListModule,
         MatMenuModule,
         MatNativeDateModule,
         MatPaginatorModule,
         MatProgressBarModule,
         MatProgressSpinnerModule,
         MatRadioModule,
         MatRippleModule,
         MatSelectModule,
         MatSidenavModule,
         MatSliderModule,
         MatSlideToggleModule,
         MatSnackBarModule,
         MatSortModule,
         MatTableModule,
         MatTabsModule,
         MatToolbarModule,
         MatTooltipModule,
         MatStepperModule, }       from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Other Library Modules */
import { AppRoutingModule }        from './app-routing.module';

/* Database Specific Modules etc. */
import { AngularFireModule }       from 'angularfire2';
// import { AngularFireDatabaseModule, 
//          AngularFireDatabase }     from 'angularfire2/database';
import { AngularFireAuthModule }   from 'angularfire2/auth';
import { AngularFirestoreModule }  from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment }             from '../environments/environment';

/* Components */
import { AppComponent }            from './app.component';
import { HeaderComponent }         from './header/header.component';
import { FooterComponent }         from './footer/footer.component';
import { CopyrightComponent }      from './copyright/copyright.component';
import { WelcomeComponent }        from './welcome/welcome.component';
import { ContactComponent }        from './contact/contact.component';
import { ContactFormComponent }    from './contact-form/contact-form.component';
import { MissionComponent }        from './mission/mission.component';
import { TrainingComponent }       from './training/training.component';
import { RegisterComponent }       from './register/register.component'; // remove me
import { BlogComponent }           from './blog/blog.component';
import { BlogPostsComponent }      from './blog-posts/blog-posts.component';
import { SignupComponent }         from './signup/signup.component';
import { SigninComponent }         from './signin/signin.component';
// import { EmailComponent }          from './email/email.component';
// import { MembersComponent }        from './members/members.component';

/* Services */
// import { AuthGuard }               from './auth.service';

@NgModule({
    // declarations - the view classes that belong to this module. 
    // Angular has three kinds of view classes: components, directives, and pipes.
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        WelcomeComponent,
        ContactComponent,
        CopyrightComponent,
        ContactFormComponent,
        MissionComponent,
        TrainingComponent,
        RegisterComponent,
        BlogComponent,
        BlogPostsComponent,
        SignupComponent,
        SigninComponent
        // EmailComponent,
        // MembersComponent
    ],

    // exports - the subset of declarations that should be visible and usable 
    // in the component templates of other modules.
    exports: [
        AngularFireAuthModule
    ],
    
    // imports - other modules whose exported classes are needed 
    // by component templates declared in this module.
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,

        // Imports having to do with AngularFire
        AngularFireModule.initializeApp(environment.firebase, 'vets2data'), // imports firebase/app, needed for everything
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireStorageModule, // imports firebase/storage, only needed for storage features

        // Imports having to do with Angular Material
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatStepperModule
    ],

    // providers - creators of services that this module contributes to the global 
    // collection of services; they become accessible in all parts of the app.
    providers: [

        // AngularFireDatabase, 
        // AngularFireDatabaseModule
        // AuthGuard
    ],

    // bootstrap - the main application view, called the root component, that hosts 
    // all other app views. Only the root module should set this bootstrap property.
    bootstrap: [
        AppComponent
    ]
})

// Every Angular app has at least one NgModule class, 
// the root module, conventionally named AppModule.
export class AppModule { }
