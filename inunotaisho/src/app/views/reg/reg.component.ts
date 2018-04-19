import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import {UserRegistration } from '../../models/reg.model';


@Component({
    templateUrl:'./reg.component.html' 
})

export class RegComponent implements OnDestroy{
    @Input() user: UserRegistration;
    errorMessage = '';
    
    constructor(private http:HttpClient){
        this.user = new UserRegistration();
    }

    registeration: {
        
    }
    reg :Subscription

    // ngOnInit(): void {
    //     this.registeration = new FormGroup({
    //         'username': new FormControl(this.user.username, [
    //             Validators.required,
                
    //         ])
    //     })
    // }

    onSubmit(form:NgForm){
        var req = 'api/registration/';
        console.log('User Data - ',this.user);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*'
            })
        }

        this.reg = this.http.post(req, this.user, httpOptions).subscribe((res) => {
            // success status code 2xx
            console.log(res);
            this.errorMessage = '';
            form.reset();
        }, (error) => {
            // non success status code
            console.log(error);
            this.errorMessage = error.json().message;
        });

    }
    ngOnDestroy(){
        if(this.reg != undefined){
            this.reg.unsubscribe()
        }
    }
    
}