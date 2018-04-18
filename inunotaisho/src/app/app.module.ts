import { CollapseModule, TooltipModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable} from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, CanActivate } from '@angular/router';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { Navbar} from './views/navbar/navbar.component';
import { routes } from "./routes/routes.module";
import { HomeComponent } from './views/home/home.component';
import { EdComponent } from './views/education/ed.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { BlogComponent } from './views/blog/blog.component';
import { BlogPostComponent } from './views/blogpost/blogpost.component';
import { LoginComponent }from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { WriteComponent } from './views/write/write.component';
import { ContactComponent } from './views/contact/contact.component';
import { RegComponent } from './views/reg/reg.component';
import portImgContainer from './views/portfolio/images/portfolio.image.component';
import FroalaEditor from './views/write/froala-editor/froala.component';

import { AuthService } from '../app/services/authservice/authentication.service';
import { AuthGuard } from '../app/services/authguard/authguard.service';




export function declarations(): any {
    return [
        AppComponent,
        BlogComponent,
        BlogPostComponent,
        ContactComponent,
        EdComponent,
        FroalaEditor,
        HomeComponent,
        LoginComponent,
        Navbar,
        ProfileComponent,
        PortfolioComponent,
        portImgContainer,
        RegComponent,
        WriteComponent
    ]
}

@NgModule({
   declarations: [ 
       AppComponent,
       declarations()
   ],      
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      TooltipModule.forRoot(),
      FormsModule,
      HttpClientModule,
      CollapseModule,
      FroalaEditorModule.forRoot(),
      FroalaViewModule.forRoot()
   ],
   providers: [
       AuthService,
       AuthGuard
   ],
   bootstrap: [AppComponent]
})
export class AppModule { 
  
}

