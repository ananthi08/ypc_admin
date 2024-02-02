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
import { TemplateListComponent } from '../template-list/template-list.component';
import { TemplateEditComponent } from '../template-edit/template-edit.component';
import { VideodetailsComponent } from '../videodetails/videodetails.component';
import { AllVideosComponent } from '../all-videos/all-videos.component';
import { NewVideosComponent } from '../new-videos/new-videos.component';
import { ApprVideosComponent } from '../appr-videos/appr-videos.component';
import { RejVideosComponent } from '../rej-videos/rej-videos.component';
import { CrPassComponent } from '../cr-pass/cr-pass.component';
import { VideosDescribe } from '../video-describe/video-describe.component';
// import { TestingComponent } from '../testing/testing.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  initialNavigation: 'enabledBlocking',
};

const routes: Routes = [

  // original_routing_paths

  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  // { path: 'forgetpassword', component: ForgetpasswordComponent, canActivate: [AuthGuard] },
  {path: 'dashboard',component: DashboardComponent,canActivate: [AuthGuard],},
  { path: 'ghdcgh', component: AdminheaderComponent, canActivate: [AuthGuard] },
  { path: 'VideosComponent', component: VideosComponent, canActivate: [AuthGuard] },
  { path: 'new_videos', component: NewVideosComponent, canActivate: [AuthGuard] },
  { path: 'app_videos', component: ApprVideosComponent, canActivate: [AuthGuard] },
  { path: 'rej_videos', component: RejVideosComponent, canActivate: [AuthGuard] },

  { path: 'video', component: VideospagelistComponent, canActivate: [AuthGuard] },
  { path: 'resetpassword', component: ResetPasswordComponent, canActivate: [AuthGuard] },
  { path: 'manageteam', component: ManageteamComponent, canActivate: [AuthGuard] },
  { path: 'template', component: TemplatesComponent ,canActivate: [AuthGuard]},
  { path: 'cr_reset', component: CrPassComponent },

  



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
  // { path: 'forgetpassword', component: ForgetpasswordComponent, },
  // { path: 'reset', component: ResetPasswordComponent, },

  // {path: 'dashboard',component: DashboardComponent,},
  // { path: 'ghdcgh', component: AdminheaderComponent,  },
  { path: 'videodetails', component: VideodetailsComponent,  },
  { path: 'videodetails1', component: VideodetailsComponent,  },

  { path: 'template_list', component: TemplateListComponent, },
  { path: 'DemoComponent', component: DemoComponent, },
  { path: 'template_edit/:id', component: TemplateEditComponent, },
  { path: 'all_videos', component: AllVideosComponent, },
  { path: 'newdetails/:newvideos', component: VideodetailsComponent, },
  { path: 'videodetails_2', component: VideosDescribe, },

  
  
  

 
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
