import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services/authservice/authentication.service';
import { TranslateService } from '../../services/translate/translate.service';


export function services(): any {

    return [
        AuthService
    ]
}

@Component({
    selector:'navbar',
    templateUrl:'./navbar.component.html',
    providers: services()
})

export class Navbar implements OnInit, OnDestroy {
    logoutSubscription:Subscription;
    data: any = {};

    constructor(private http:HttpClient, private authService: AuthService, private translateService: TranslateService){

    }

    ngOnInit(){
        this.translateService.getJSON().subscribe(data => {
             this.data = data;
         });
    }
    
    isUserLoggedIn = () =>{
        return this.authService.getIsLoggedIn();   
    }

    logout = () => {
        this.authService.logout();
       
    }
    ngOnDestroy() {
        if (this.logoutSubscription != undefined) {
            this.logoutSubscription.unsubscribe();
        }
    }
}