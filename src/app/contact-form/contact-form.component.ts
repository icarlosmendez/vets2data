import { Component, OnInit }  from '@angular/core';
import { FormBuilder,
         FormControl,  
         FormGroup, 
         Validators }         from '@angular/forms';
import { User }               from '../user';


@Component({
  selector       : 'app-contact-form',
  templateUrl    : './contact-form.component.html',
  styleUrls      : ['./contact-form.component.scss']
})


export class ContactFormComponent implements OnInit {

    email = new FormControl('', [Validators.required, Validators.email]);
    
    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }

    constructor() { 

    }

    ngOnInit() {

    }

}
