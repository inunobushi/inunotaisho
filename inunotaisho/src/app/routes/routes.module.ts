import { Routes, CanActivate } from '@angular/router';

import { HomeComponent } from '../views/home/home.component';
import { EdComponent } from '../views/education/ed.component';
import { PortfolioComponent } from '../views/portfolio/portfolio.component';
import { BlogComponent } from '../views/blog/blog.component';
import { BlogPostComponent } from '../views/blogpost/blogpost.component';
import { LoginComponent }from '../views/login/login.component';
import { ProfileComponent } from '../views/profile/profile.component';
import { WriteComponent } from '../views/write/write.component';
import { ContactComponent } from '../views/contact/contact.component';
import { RegComponent } from '../views/reg/reg.component';
import portImgContainer from '../views/portfolio/images/portfolio.image.component';
import FroalaEditor from '../views/write/froala-editor/froala.component';

import { AuthGuard } from "../services/authguard/authguard.service"


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
    {path:'blogPost', component: BlogPostComponent}
   ]