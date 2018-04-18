import {Component, OnInit} from '@angular/core';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
//var blogComponent = require('./blog.component.html');


@Component({
    templateUrl:'./blog.component.html' //template: blogComponent
})
export class BlogComponent implements OnInit{
    items: {};
    constructor(private http:HttpClient) {

     }

     getBlogItems(){
        this.http.get('/blog').subscribe(res => {
            console.log(res)
        }, err => {
            console.log(err);
        })
     }
    ngOnInit(): void {
        this.getBlogItems();
    }
    
}