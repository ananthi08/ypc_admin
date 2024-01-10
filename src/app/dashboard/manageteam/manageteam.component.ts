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
  admindetails: any = {};

  result: any;

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
      // console.log(this.all_admindetails);
    
    },);
    



     // admins who are not assigned the videos 
     let getnotassignAdminDetails = {}

    //  this.database.getData('ypc-admin-micro-service/admin/unassigned/admins', ).subscribe((result: any) => {
        
    //    this.admindetails = result;           
    //  },);


    this.database.getData('ypc-admin-micro-service/admin/unassigned/admins').subscribe((result: any[]) => {
      // Sort the result array by id
      this.admindetails = result.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    });


  }





  assignvideo(adminId: any) {
    // console.log('Admin ID:', adminId);

let data ={
  videosId: [], 
}

    this.database.postdata('ypc-admin-micro-service/admin/assign/task/'+ adminId,data).subscribe({
      next: (result) => {
        console.log(result);
        this.result = result.message;
        this.succesMsg(this.result);
      //  console.log(this.result);

      },
      error: (error) => {
        // console.log(error);
        this.errorMsg(error.error.error);
      },
      complete: () => {
        // Reload 
        window.location.reload(); 
  
    
      },
    });

  }


  unassignvideo(adminId: any) {
    // console.log('Admin ID:', adminId);

let data ={ 
  
}
// this.database.postdata('ypc-admin-micro-service/admin/unassign/task/2',data).subscribe({

    this.database.postdata('ypc-admin-micro-service/admin/unassign/task/'+ adminId,data).subscribe({
      next: (result) => {
        // console.log(result);
        this.result = result.message;
        this.succesMsg(this.result);
      //  console.log(this.result);

      },
      error: (error) => {
        // console.log(error);
        this.errorMsg(error.error.error);
      },
      complete: () => {
        // Reload 
        window.location.reload(); 
  
    
      },
    });

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


