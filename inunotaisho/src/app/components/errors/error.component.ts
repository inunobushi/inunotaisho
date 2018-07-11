import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../services/translate/translate.service';

@Component({
    templateUrl:'./error.component.html' //template: loginComponent
})

export class ErrorComponent implements OnInit{

    data: any = {};

    constructor( private translateService: TranslateService ){

    }

    ngOnInit(){
        this.translateService.getJSON().subscribe(data => {
             this.data = data;
         });
    }
    
}
