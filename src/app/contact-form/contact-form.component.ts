import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import {MDCFormField} from '@material/form-field';
import {MDCSelect} from '@material/select';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})


export class ContactFormComponent implements OnInit {

    // // Some dummy code to indicate how forms can work using angular-cli
    // represent = [
    //     'Select One',
    //     'Organization', 
    //     'Personal'
    // ];

    // model = new User(
    //     18, 
    //     'Dr', 
    //     'IQ', 
    //     'driq@me.com',
    //     '1234567890', 
    //     this.represent[0]);

    // submitted = false;

    // onSubmit() { this.submitted = true; }

    // // TODO: Remove this when we're done
    // get diagnostic() { return JSON.stringify(this.model); }



    constructor() { 

    }

    ngOnInit() {
        
        // const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
        // formField.listen('MDCFormField:change', () => {

        // });

        const select = new MDCSelect(document.querySelector('.mdc-select'));
        select.listen('MDCSelect:change', () => {
          // alert(`Selected "${select.selectedOptions[0].textContent}" at index ${select.selectedIndex} ` +
          //       `with value "${select.value}"`);
        });

    }

}
