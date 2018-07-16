import { CollapseModule, TooltipModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable} from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, CanActivate } from '@angular/router';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


// for AoT support, https://github.com/ocombe/"@ngx-translate/core"#aot
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SimpleNotificationsModule } from 'angular2-notifications';

/**
 * common
 */

import { Navbar} from './common/navbar/navbar.component';
import { SocialBannerComponent } from './common/banners/social/social.component';
import { LanguagePickerComponent } from './common/languagePicker/languagePicker.component';

/**
 * routes
 */

import { routes } from "./routes/routes.module";

/**
 * components
 */

import { HomeComponent } from './components/home/home.component';
import { EdComponent } from './components/education/ed.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPostComponent } from './components/blogpost/blogpost.component';
import { LoginComponent }from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WriteComponent } from './components/write/write.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegComponent } from './components/reg/reg.component';
import { ErrorComponent } from './components/errors/error.component';
import portImgContainer from './components/portfolio/portfolio-images/portfolio.image.component';
import FroalaEditor from './components/write/froala-editor/froala.component';

import { AuthService } from '../app/services/authservice/authentication.service';
import { AuthGuard } from './common/authguard/authguard.guard';
import { TranslateService } from './services/translate/translate.service';


/* translate support */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
  }




export function declarations(): any {
    return [
        AppComponent,
        /* our app's components imported in the root module*/
        BlogComponent,
        BlogPostComponent,
        ContactComponent,
        EdComponent,
        FroalaEditor,
        HomeComponent,
        LanguagePickerComponent,
        LoginComponent,
        Navbar,
        ProfileComponent,
        PortfolioComponent,
        portImgContainer,
        RegComponent,
        WriteComponent,
        ErrorComponent,
        SocialBannerComponent
    ]
}

@NgModule({
   declarations: [ 
       AppComponent,
       declarations()
   ],      
   imports: [
      BrowserModule,

      SimpleNotificationsModule.forRoot(),

      RouterModule.forRoot(routes),

      TooltipModule.forRoot(),

      FormsModule,

      HttpClientModule,

      CollapseModule,

      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient],
        },
      }),

      FroalaEditorModule.forRoot(),

      FroalaViewModule.forRoot()
   ],
   providers: [
       AuthService,
       AuthGuard,
       TranslateService
   ],
   bootstrap: [AppComponent]
})
export class AppModule { 
  
}

