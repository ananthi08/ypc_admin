import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery'
import { DbService } from 'src/app/services/db.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model:any={};
  errormsg :any;
  successmsg:any;
  datas:any={};
  password:any={};
  email:any={};
  logindata:any={};
  successMessage: any;
  errorMessage: any;
  result:any={};
  // cookieService: any;
  showForgotPassword: boolean = false;
  forgotPasswordModel: any = {}; 

  
  constructor(private database: DbService,private router: Router,private cookieService: CookieService) { }



  ngOnInit(): void {
    this.clearlocalstorage()
  }


  toggleForgotPassword() {
    this.showForgotPassword = !this.showForgotPassword;
  }

  onResetPassword(form: any) {
   
    console.log('Resetting password:', this.forgotPasswordModel);
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      this.errorMsg("Enter the required fields");
    } else {
      let data = {
        "data": this.datas,
        "email": this.model.email,
        "password": this.model.password
      };
  
      localStorage.setItem('email', JSON.stringify(this.model.email));
      this.database.postdata('ypc-admin-micro-service/admin/login', data).subscribe({
        next: (result) => {
          console.log(result);
          localStorage.setItem('id', JSON.stringify(result.adminId));
          this.cookieService.set('id', result.adminId.toString());
          this.result = result.data;
          
        },
        
        
        error: (error) => {
          console.log(error.error.error);
         
          this.errorMsg(error.error.error);

        },
        
        complete: () => {

          this.router.navigate(['dashboard']);


        }
      });
    }
  }
  



// clearance for local
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
