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





  onPressLogin(form: NgForm): void {
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
          console.log(result.changePassword);
          localStorage.setItem('id', JSON.stringify(result.adminId));
          localStorage.setItem('email', JSON.stringify(result.email));
         
          
          if (result.changePassword == 0) {
            alert("xssxsxxsxs")
             this.router.navigate(['resetpassword']);
           
           } 
           else {
            
             this.router.navigate(['dashboard']);
           }
  
        
          
        },
        error: (error) => {
          console.log(error.error.error);
          this.errorMsg(error.error.error);
        },
        complete: () => {
          
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
