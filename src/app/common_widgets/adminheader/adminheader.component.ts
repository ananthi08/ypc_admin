import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent {


  borrower:any={};
  data:any;
  user: any ={};
  borrower_details: any = {};
  lender_details:any={};
  errormsgheader:any;
  successmsgheader:any;
  addborrower:any = {};

  nameuser: any;
  borrower_id:any;
  borrower_list:any;
  emailuser: any;
  adminuserid: any;
  modeldata:any={};
  // -----------------------------------
  addlender:any={};
  lender_departments :any={};
  departments =null;
  model:any={};
  location: any;
  locationvalue=null;
  lendername: any;
  lender_names :any={};
  lendernames=null;
  slug:any;
  designations: any={};
  entity: any={};
  entity_type:any={};
  slugs='borrower';
  borrower_userid:any={};
  adminslug: any;
    isEnabledEmail = true;
    isEnabledMobile = true;
    isEnabledEntity = true;
    isEnabledCompany = true;


  addconnector: any = {};
  connector_details: any = {};

  user1:any={};
  role:any={};
  partnerid:any={};
  partnerrole:any={};
  partner:any={};
  ourrole:any={};
  connectorrrole:any={};
  adminrrole:any={};
  superadmin_email:any;
  cookieService: any;

  constructor(private dbo: DbService, private route: Router) {



   }

  ngOnInit()

  {
 
    


  }





  confirmLogout() {

    // this.clearLocalStorage();
    this.route.navigate(['login']);
    this.clearlocalstorage();

  }
  

// clearance for local
clearlocalstorage(): void {
  this.cookieService.delete('id');
  sessionStorage.clear();
  localStorage.clear();
}

  



localstorageremove(){
  sessionStorage.clear();
    localStorage.clear();
}












  succesMsg(msg:any) {

    //alert(msg);
    this.successmsgheader = msg;
    $('#collapseExample1').show();
    setTimeout(() => {
      $('#collapseExample1').hide();
    }, 3000);
  } //-----------------end of showmsg---------------------------------
  errorMsg(msg: any) {
    this.errormsgheader = msg;
    $('#collapseExample').show();
    setTimeout(() => {
      $('#collapseExample').hide();
    }, 3000);
  }//
}
