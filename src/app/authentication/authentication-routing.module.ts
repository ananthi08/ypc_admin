import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminheaderComponent } from '../common_widgets/adminheader/adminheader.component';
import { VideosComponent } from '../videos/videos.component';
import { VideospagelistComponent } from '../videos/videospagelist/videospagelist.component';
import { AuthGuard } from './auth.guard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TemplatesComponent } from '../templates/templates.component';
import { ManageteamComponent } from '../dashboard/manageteam/manageteam.component';
import { DemoComponent } from '../demo/demo.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  initialNavigation: 'enabledBlocking',
};

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent, canActivate: [AuthGuard] },
  {path: 'dashboard',component: DashboardComponent,canActivate: [AuthGuard],},
  { path: 'ghdcgh', component: AdminheaderComponent, canActivate: [AuthGuard] },
  { path: 'VideosComponent', component: VideosComponent, canActivate: [AuthGuard] },
  { path: 'video', component: VideospagelistComponent, canActivate: [AuthGuard] },
  { path: 'resetpassword', component: ResetPasswordComponent, canActivate: [AuthGuard] },
  { path: 'manageteam', component: ManageteamComponent, canActivate: [AuthGuard] },
  { path: 'template', component: TemplatesComponent ,canActivate: [AuthGuard]},



  
  // { path: 'template', component: TemplatesComponent },
  // { path: 'dashboard', component: DashboardComponent, }, 


  // { path: 'login', component: LoginComponent },
  // { path: 'resetpassword', component: ResetPasswordComponent },

  // { path: 'forgetpassword', component: ForgetpasswordComponent, },
  // {path: 'dashboard',component: DashboardComponent,},
  // { path: 'ghdcgh', component: AdminheaderComponent,  },
  // { path: 'VideosComponent', component: VideosComponent, },
  // { path: 'manageteam', component: ManageteamComponent, },
  { path: 'DemoComponent', component: DemoComponent, },

  

 
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
