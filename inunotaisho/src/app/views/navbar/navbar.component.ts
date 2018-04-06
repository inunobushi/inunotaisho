import {Component, OnInit, OnDestroy} from '@angular/core';
import { NgIf } from '@angular/common';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';



import { HomeComponent } from '../home/home.component';
import { EdComponent } from '../education/ed.component';
import { PortfolioComponent }  from '../portfolio/portfolio.component';
import { BlogComponent } from '../blog/blog.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { WriteComponent } from '../write/write.component';
import { ContactComponent } from '../contact/contact.component';
import { RegComponent } from '../reg/reg.component';

import { AuthService } from '../../services/authservice/authentication.service';

//var navbarComponent = require('./navbar.component.html');

export function services(): any {

    return [
        AuthService
    ]
}

@Component({
    selector:'navbar',
    templateUrl:'./navbar.component.html', //template: navbarComponent,
    providers: services()
})

export class Navbar implements OnDestroy {
    logoutSubscription:Subscription;

    constructor(private http:Http, private authService: AuthService){

    }
    
    isUserLoggedIn = () =>{
        return this.authService.getIsLoggedIn();   
    }

    logout = () => {
        this.logoutSubscription = this.http.get('/logout').subscribe((res) => {
            if(res.status) {
                this.authService.setIsLoggedIn(false);
            }
        })
       
    }
    ngOnDestroy() {
        if (this.logoutSubscription != undefined) {
            this.logoutSubscription.unsubscribe();
        }
    }
}