import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import * as $ from 'jquery'
import { DbService } from 'src/app/services/db.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {

  model: any = {};
  errormsg: any;
  successmsg: any;
  datas: any = {};
  result: any;
  storedEmail: any;

  constructor(private database: DbService,private router: Router,private cookieService: CookieService) { }

  ngOnInit(): void {
  



  }
  onTapSubmit(resetForm: NgForm): void {
    if (!resetForm.valid) {
      this.errorMsg("Enter the required fields");
    } else {

        let data = {
          "data": this.datas,
          "email": this.model.email
        };

        this.database.postdata('ypc-admin-micro-service/admin/verify/email', data).subscribe({
          next: (result) => {
            this.result = result;
            this.succesMsg("login successfully");

            localStorage.setItem('emails', JSON.stringify(this.model.email));

          },
          error: (error) => {
            console.log(error.error.error);

            this.errorMsg(error.error.error);
          },
          complete: () => {
            this.succesMsg("login successfully");

            this.router.navigate(['cr_reset']);
            // this.router.navigate(['dashboard']);
          }
        });
    
    }
  }

  succesMsg(msg: any) {
    this.successmsg = msg;
    $('#collapseExample1').show();
    setTimeout(() => {
      $('#collapseExample1').hide();
    }, 3000);

  }
  errorMsg(msg: any) {

    this.errormsg = msg;
    $('#collapseExample').show();
    setTimeout(() => {
      $('#collapseExample').hide();
    }, 3000);
  }

}
