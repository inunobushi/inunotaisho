import {Component, OnDestroy} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
//var contactComponent = require('./contact.component.html');

@Component({
    templateUrl:'./contact.component.html' //template: contactComponent
})

export class ContactComponent implements OnDestroy{
    subscribe:Subscription;

    constructor(private http: HttpClient) { }

    onSubmit(contactForm: NgForm){
        console.log(contactForm);
       this.subscribe = this.http.post('api/contact', contactForm.value)
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