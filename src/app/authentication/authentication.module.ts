import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule } from '@angular/forms'; 
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
// import { AdminheaderComponent } from '../common_widgets/adminheader/adminheader.component';
// import { AdminheaderComponent } from './forgetpassword/forgetpassword.component';
// import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgetpasswordComponent,
    // DashboardComponent
 
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
   

    
  ],

  providers: [AuthenticationComponent]
})
export class AuthenticationModule { }
