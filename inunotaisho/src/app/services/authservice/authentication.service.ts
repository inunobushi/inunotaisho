import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { loginModel } from './../../models/login.model';

@Injectable()
export class AuthService {
    
     isLoggedIn = false;

     constructor(private http:HttpClient){
         const token = localStorage.getItem('token')
         if(token){
             this.isLoggedIn = true
         }
     }

    setIsLoggedIn = (token: string) => {
        this.isLoggedIn = true;
        localStorage.setItem('token', token);
    }
    getIsLoggedIn() {
        return this.isLoggedIn
    }
    login(user:loginModel){
        return this.http.post('/users/login', user);
    }
    logout(){
        localStorage.removeItem('token')
        this.isLoggedIn = false
    }
}