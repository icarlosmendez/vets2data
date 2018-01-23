// Angular Library Modules
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { BrowserModule }      from '@angular/platform-browser';

// Other Library Modules
import { AppRoutingModule }   from './app-routing.module';

// Components
import { AppComponent }       from './app.component';
import { HeaderComponent }    from './header/header.component';
import { FooterComponent }    from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { WelcomeComponent }   from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

// Services


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
        ContactFormComponent
    ],

    // exports - the subset of declarations that should be visible and usable 
    // in the component templates of other modules.
    exports: [],
    
    // imports - other modules whose exported classes are needed 
    // by component templates declared in this module.
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule
    ],

    // providers - creators of services that this module contributes to the global 
    // collection of services; they become accessible in all parts of the app.
    providers: [],

    // bootstrap - the main application view, called the root component, that hosts 
    // all other app views. Only the root module should set this bootstrap property.
    bootstrap: [
        AppComponent
    ]
})

// Every Angular app has at least one NgModule class, 
// the root module, conventionally named AppModule.
export class AppModule { }
