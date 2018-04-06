import { Injectable} from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import {AuthService} from '../authservice/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router:Router){

    }
    canActivate(){
        if(!this.auth.isLoggedIn){
            this.router.navigate(["login"])
        }
        return this.auth.isLoggedIn;
    }
}