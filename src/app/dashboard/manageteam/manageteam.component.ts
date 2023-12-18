import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-manageteam',
  templateUrl: './manageteam.component.html',
  styleUrls: ['./manageteam.component.css']
})


export class ManageteamComponent {

  model:any={};
  errormsg :any;
  successmsg:any;

  id:number| undefined;
  role: string | undefined;
  all_admindetails: any = {};

  constructor(private database: DbService,private router: Router) { }


  logout(): void {


    this.clearlocalstorage()

    
    this.router.navigate(['']);
  }

 

  ngOnInit(): void {
    this.GetInfo();
    if (localStorage.getItem("id")) {
      this.id = JSON.parse(localStorage.getItem("id") || '{}');
    }

    if (localStorage.getItem("role")) {
      this.role = JSON.parse(localStorage.getItem("role") || '{}');
    }



  }


  GetInfo() {

    let getAdminDetails = {}

    this.database.getData('ypc-admin-micro-service/alladmin', ).subscribe((result: any) => {
       
      this.all_admindetails = result;
console.log(this.all_admindetails);
    
    },);
    


  }



























  clearlocalstorage(): void {
    sessionStorage.clear();
    localStorage.clear();
  }





  succesMsg(msg:any)
  {
          this.successmsg=msg;
          $('#collapseExample1').show();
          setTimeout(() => {
            $('#collapseExample1').hide();
          }, 3000);
  
  }
  errorMsg(msg:any)
  {
  
        this.errormsg=msg;
          $('#collapseExample').show();
          setTimeout(() => {
            $('#collapseExample').hide();
          }, 3000);
  }
}


