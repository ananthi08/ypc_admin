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
import { TemplatesComponent } from './templates/templates.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
// import { TestingComponent } from './testing/testing.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SaraComponent } from './sara/sara.component';
import { ManageteamComponent } from './dashboard/manageteam/manageteam.component';
import { DemoComponent } from './demo/demo.component';
import {MatTabsModule} from '@angular/material/tabs';
// import { VideosComponent } from './videos/videos/videos.component';
 





import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminheaderComponent,
    LeftnavComponent,
    VideosComponent,
    VideospagelistComponent,
    TemplatesComponent,
    ManageteamComponent,
    DemoComponent
 
   
  ],
  imports: [
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatFormFieldModule,
    MatChipsModule,
    HttpClientModule,
    BrowserModule,
    AuthenticationModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatChipsModule,
    Ng2SearchPipeModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
