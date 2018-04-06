import {Component, OnInit} from '@angular/core';
import { NgIf } from '@angular/common';
import { Http } from '@angular/http';
//var blogPost = require('./blogpost.component.html');

@Component({
    templateUrl:'./blogpost.component.html' //template: blogPost
})
export class BlogPostComponent implements OnInit{
    items: {};
    constructor(private http:Http) {

     }

     getPostItems(){

     }
    ngOnInit(): void {
        this.getPostItems();
    }
    
}