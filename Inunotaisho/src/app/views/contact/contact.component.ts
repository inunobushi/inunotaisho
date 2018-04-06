import {Component, OnDestroy} from '@angular/core';
import { Http } from '@angular/http';
import {NgForm} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
//var contactComponent = require('./contact.component.html');

@Component({
    templateUrl:'./contact.component.html' //template: contactComponent
})

export class ContactComponent implements OnDestroy{
    subscribe:Subscription;

    constructor(private http: Http) { }

    onSubmit(contactForm: NgForm){
        console.log(contactForm);
       this.subscribe = this.http.post('/contact', contactForm.value)
        .subscribe(res => {
            contactForm.reset();
        },
    err => {
        console.log(err);
        })
    }
    
    ngOnDestroy(){
        if(this.subscribe){
            this.subscribe.unsubscribe()
        }
    }
}