import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Http } from '@angular/http';
import { NgForm, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../services/authservice/authentication.service';
import { loginModel } from '../../models/login.model'
import {Router} from '@angular/router';
//var loginComponent = require('./login.component.html');

@Component({
    templateUrl:'./login.component.html' //template: loginComponent
})

export class LoginComponent implements OnDestroy, OnInit{
    constructor(private http: Http, private authService:AuthService, private router:Router) { 


    }
    login: Subscription

    @Input() user:loginModel;
    
    loginUser = () => {
        let login = this.http.post('/users/login', this.user).subscribe(data => {
            if(data.status === 200){
                console.log(data);
                this.authService.setIsLoggedIn(true);
                this.router.navigate(['/']);
            }
        }, err => { 
            console.log(err);
            console.log('user not logged in');
            this.authService.setIsLoggedIn(false);
        })
    }
    ngOnDestroy(){
        if (this.login != undefined){
            this.login.unsubscribe();
        }
    }
    ngOnInit():void{
        this.user = new loginModel();
    }
}