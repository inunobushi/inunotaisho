import {Injectable} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
@Injectable()
export class AuthService {
    
     isLoggedIn = false;

    setIsLoggedIn = (value: boolean) => {
        this.isLoggedIn = value;
        localStorage.setItem('loggedIn', value ? '1' : '0');
    }
    getIsLoggedIn() {
        let loggedIn = localStorage.getItem('loggedIn');
        return loggedIn && loggedIn == '1';
    }
}