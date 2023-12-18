import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  // styleUrls: ['./leftnav.component.scss']
})






export class LeftnavComponent {


  model:any={};
  statusbar:any=[];
  shareholdings='';
  shareholdings1='';
  shareholdings2='';
  allmodel:any={};


  shareholderbar:any;

      //-----------------------------------
      public tag_lnav_bap ="";
      public tag_lnav_fin ="";
      public tag_lnav_dir ="";
      public tag_lnav_sha ="";
      public tag_lnav_kyc ="";
      public tag_lnav_bop ="";
      public tag_lnav_och ="";
      public tag_lnav_doc="";

  basicprofiletrue: any;
  kycborrowertrue: any;
  directorsborrowertrue: any;
  financiaborrowertrue: any;
  shareholdborrowertrue: any;
  openchargesadmintrue:any;
  borrower:any={};
  onboardborrowerdetail:any={};
  onboardborrowerdetails:any={};
  Navigation:any;
  downloadstrue:any;
      //-----------------------------------
      constructor(private dbo: DbService, private route: Router){}

      ngOnInit(): void {

        this.basicprofiletrue = true;
        this.tag_lnav_bap ="active";

       
        
    
              
         
             
      }









 
      Dashboard(){
        this.route.navigateByUrl('dashboard')

        this.tag_lnav_fin ="active";

      }
      manageTeam(){
   
        this.route.navigateByUrl('manageteam')

        this.tag_lnav_fin ="active";
    
      }
      shareholding(){

        // this.tag_lnav_sha ="active";
    
      }




      // this is for video verification navigation
      VideosComponent(){
 
        this.tag_lnav_kyc ="active";
   
        this.route.navigateByUrl('VideosComponent')
      }
    
      selectbar(){
        this.shareholdings = this.statusbar[0]; 
        this.shareholdings1 = this.statusbar[1];
        this.shareholdings2 = this.statusbar[2];


      }



      

     




}

