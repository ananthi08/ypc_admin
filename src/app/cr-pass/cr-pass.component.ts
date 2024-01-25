import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-cr-pass',
  templateUrl: './cr-pass.component.html',
  styleUrls: ['./cr-pass.component.css']
})
export class CrPassComponent {
  model:any={};
  errormsg :any;
  successmsg:any;
  datas:any={};
  result: any;

  email: string | undefined;



  showPassword = false;
  showConfirmPassword = false;
  showOldPassword = false;
  NewpasswordType = 'password';
  confirmPasswordType = 'password';
  oldPasswordType = 'password';
  storedEmail:any;

  constructor(private database: DbService,private router: Router,private cookieService: CookieService) { }

ngOnInit(): void {
  
  if (localStorage.getItem("emails")) {
    this.email = JSON.parse(localStorage.getItem("emails") || '{}');
console.log('fgv',this.email);


  }

  }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.NewpasswordType = this.showPassword ? 'text' : 'password';
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

    // this.storedEmail = localStorage.getItem('email');

// var cleanedEmail = this.storedEmail.replace(/"/g, '');
      // console.log( cleanedEmail);
    if(this.model.confirmPassword == this.model.newPassword){
        let data = {
          "data": this.datas,
          "email": this.email ,       
          "password": this.model.confirmPassword
        };
        this.database.postdata('ypc-admin-micro-service/admin/forget/password', data).subscribe({
          next: (result) => {
            this.result = result; 
            alert("success");        
          },
          
          error: (error) => {
            console.log(error.error.error);
          
            this.errorMsg(error.error.error);
          },
          complete: () => {
            this.router.navigate(['login']);
          
          }
        });
      }
      else{
        alert("Password Confirmation does not match");
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
