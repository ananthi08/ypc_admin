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
  role: string | undefined;
      //-----------------------------------
      constructor(private dbo: DbService, private route: Router){}

      ngOnInit(): void {

        this.basicprofiletrue = true;
        this.tag_lnav_bap ="active";

        if (localStorage.getItem("role")) {
          this.role = JSON.parse(localStorage.getItem("role") || '{}');
        }
        
    
              
         
             
      }









 
      Dashboard(){
        this.route.navigateByUrl('dashboard')



      }
      manageTeam(){
   
        this.route.navigateByUrl('manageteam')


    
      }
      TemplatesComponent(){
        this.route.navigateByUrl('template')
        // this.tag_lnav_sha ="active";
    
      }
      
      manageTemplatesComponent(){
        this.route.navigateByUrl('template_list')
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

