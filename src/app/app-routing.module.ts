import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';



const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  initialNavigation: 'enabledBlocking',
};
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
