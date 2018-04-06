import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { profileModel} from '../../models/profile.model';
//var profileComponent = require('./profile.component.html');

@Component({
    templateUrl:'./profile.component.html' //template: profileComponent
})

export class ProfileComponent {
    
    profile:profileModel;

    constructor() { 
        this.profile = new profileModel();
    }  
}