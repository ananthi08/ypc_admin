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

  // original_routing_paths

  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent, canActivate: [AuthGuard] },
  {path: 'dashboard',component: DashboardComponent,canActivate: [AuthGuard],},
  { path: 'ghdcgh', component: AdminheaderComponent, canActivate: [AuthGuard] },
  { path: 'VideosComponent', component: VideosComponent, canActivate: [AuthGuard] },
  { path: 'video', component: VideospagelistComponent, canActivate: [AuthGuard] },
  { path: 'resetpassword', component: ResetPasswordComponent, canActivate: [AuthGuard] },
  { path: 'manageteam', component: ManageteamComponent, canActivate: [AuthGuard] },
  { path: 'template', component: TemplatesComponent ,canActivate: [AuthGuard]},





  // mahi testing :
// in this i need to create a seperate module for each then only i need to use the below and import the modules below
  // { path: 'login', loadChildren: () => import('./login/login.component').then(m => m.LoginComponent) },
  // { path: 'forgetpassword', loadChildren: () => import('./forgetpassword/forgetpassword.component').then(m => m.ForgetpasswordComponent), canActivate: [AuthGuard] },
  // { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.component').then(m => m.DashboardComponent), canActivate: [AuthGuard] },
  // { path: 'ghdcgh', loadChildren: () => import('../common_widgets/adminheader/adminheader.component').then(m => m.AdminheaderComponent), canActivate: [AuthGuard] },
  // { path: 'VideosComponent', loadChildren: () => import('../videos/videos.component').then(m => m.VideosComponent), canActivate: [AuthGuard] },
  // { path: 'video', loadChildren: () => import('../videos/videospagelist/videospagelist.component').then(m => m.VideospagelistComponent), canActivate: [AuthGuard] },
  // { path: 'resetpassword', loadChildren: () => import('./reset-password/reset-password.component').then(m => m.ResetPasswordComponent), canActivate: [AuthGuard] },
  // { path: 'manageteam', loadChildren: () => import('../dashboard/manageteam/manageteam.component').then(m => m.ManageteamComponent), canActivate: [AuthGuard] },
  // { path: 'template', loadChildren: () => import('../templates/templates.component').then(m => m.TemplatesComponent), canActivate: [AuthGuard] },


// og without guard :
    // { path: 'login', component: LoginComponent },
    // { path: 'forgetpassword', component: ForgetpasswordComponent,  },
    // {path: 'dashboard',component: DashboardComponent,},
    // { path: 'ghdcgh', component: AdminheaderComponent, },
    // { path: 'VideosComponent', component: VideosComponent, },
    // { path: 'video', component: VideospagelistComponent, },
    // { path: 'resetpassword', component: ResetPasswordComponent, },
    // { path: 'manageteam', component: ManageteamComponent, },
    // { path: 'template', component: TemplatesComponent },


  // testing purpose
  { path: 'DemoComponent', component: DemoComponent, },

  

 
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
