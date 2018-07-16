import { Routes, CanActivate } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { EdComponent } from '../components/education/ed.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { BlogComponent } from '../components/blog/blog.component';
import { BlogPostComponent } from '../components/blogpost/blogpost.component';
import { LoginComponent }from '../components/login/login.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { WriteComponent } from '../components/write/write.component';
import { ContactComponent } from '../components/contact/contact.component';
import { RegComponent } from '../components/reg/reg.component';
import { ErrorComponent } from '../components/errors/error.component';
import portImgContainer from '../components/portfolio/portfolio-images/portfolio.image.component';
import FroalaEditor from '../components/write/froala-editor/froala.component';
import { SocialBannerComponent } from '../common/banners/social/social.component';

import { AuthGuard } from "../common/authguard/authguard.guard";


export const routes: Routes = [
    {path:'', pathMatch:'full', component:HomeComponent},
    {path:'education', component:EdComponent},
    {path:'portfolio', component: PortfolioComponent},
    {path:'blog', component:BlogComponent},
    {path:'login', component: LoginComponent},
    {path:'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path:'write', component: WriteComponent, canActivate: [AuthGuard]},
    {path:'contact', component: ContactComponent},
    {path:'reg', component: RegComponent},
    {path:'blogPost', component: BlogPostComponent},
    { path: '**',  component: ErrorComponent }
   ]