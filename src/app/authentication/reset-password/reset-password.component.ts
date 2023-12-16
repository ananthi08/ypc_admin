import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  model:any={};
  errormsg :any;
  successmsg:any;
  datas:any={};
  result: any;




  showPassword = false;
  showConfirmPassword = false;
  showOldPassword = false;
  passwordType = 'password';
  confirmPasswordType = 'password';
  oldPasswordType = 'password';
  storedEmail:any;

  constructor(private database: DbService,private router: Router,private cookieService: CookieService) { }

ngOnInit(): void {
  



  }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.passwordType = this.showPassword ? 'text' : 'password';
}

toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
    this.confirmPasswordType = this.showConfirmPassword ? 'text' : 'password';
}


toggleOldPasswordVisibility() {
  this.showOldPassword = !this.showOldPassword;
  this.oldPasswordType = this.showOldPassword ? 'text' : 'password';
}





  onTapSubmit(resetForm: NgForm): void {
    if (!resetForm.valid) {
      this.errorMsg("Enter the required fields");
    } else {


     
    this.storedEmail = localStorage.getItem('email');

var cleanedEmail = this.storedEmail.replace(/"/g, '');
      console.log( cleanedEmail);
      
    
      if (cleanedEmail) {
    
        let data = {
          "data": this.datas,
          "email": cleanedEmail.toString(),
          "oldPassword":this.model.oldPassword,
          "newPassword": this.model.confirmPassword
        };
  
        this.database.postdata('ypc-admin-micro-service/admin/change/password', data).subscribe({
          next: (result) => {
            console.log(result);
            this.result = result;
  
         
          },
          error: (error) => {
            console.log(error.error.error);
            // alert("xsdsddsdsdsd")
            
            this.errorMsg(error.error.error);
          },
          complete: () => {
            this.router.navigate(['login']);
          
          }
        });
      } else {
       
        this.errorMsg('Something Went Wrong!');
      }
    }
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
