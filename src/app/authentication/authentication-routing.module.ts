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


  // { path: 'login', component: LoginComponent },
  // { path: 'forgetpassword', component: ForgetpasswordComponent, },
  // {path: 'dashboard',component: DashboardComponent,},
  // { path: 'ghdcgh', component: AdminheaderComponent,  },
  // { path: 'VideosComponent', component: VideosComponent, },
  // { path: 'video', component: VideospagelistComponent,  },
 
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
