import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AdminheaderComponent } from './common_widgets/adminheader/adminheader.component';
import { LeftnavComponent } from './common_widgets/leftnav/leftnav.component';
import { VideosComponent } from './videos/videos.component';
import { VideospagelistComponent } from './videos/videospagelist/videospagelist.component';

// import { VideosComponent } from './videos/videos/videos.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminheaderComponent,
    LeftnavComponent,
    VideosComponent,
    VideospagelistComponent,
 
   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AuthenticationModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
