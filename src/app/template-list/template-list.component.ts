import { DbService } from 'src/app/services/db.service';
import { Router } from '@angular/router';
import { EncryptionService } from '../services/encryption.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {
  all_userdetails: any = {};
  totalUserCount: any;
  id: any = {};
  admin_id: any = {};
  template_id: any;
  result: any;
  chartDetails: any;
  ChartId: any = {};
  constructor(private database: DbService, private router: Router, private encryptionService: EncryptionService) { }

  ngOnInit() {



    if (localStorage.getItem("id")) {
      this.admin_id = JSON.parse(localStorage.getItem("id") || '{}');
      console.log('admin_id', this.admin_id);

    }


    // if (localStorage.getItem("chartDetails.id")) {
    //   this.template_id = JSON.parse(localStorage.getItem("chartDetails.id") || '{}');
    //   console.log('fgdfgdfg',this.template_id);

    // }


    this.GetInfo();

  }

  GetInfo() {

    let getUserDetails = {}

    this.database.getData(`ypc-admin-micro-service/template/${this.admin_id}`,).subscribe((result: any) => {
      console.log('Total User Details Count:', result);

      this.all_userdetails = result.chartDetails;
      this.totalUserCount = this.all_userdetails.length;

      console.log(this.all_userdetails);


    },);







  }

  inactive(): void {

    const data = {
      templateStatus: "Inactive"
    }

    this.database.putdata(`ypc-admin-micro-service/delete/template/${this.ChartId}`, data).subscribe({
      // this.database.putdata(`ypc-admin-micro-service/delete/template/4`, data).subscribe({
      // 
      next: (result) => {
        console.log(result);
        this.result = result.data;
        // this.router.navigate(['template_list']);\
        this.GetInfo()

      },
      error: (error) => {
      },
      complete: () => {
        console.log("completed ..........");
        // this.router.navigate(['template_list']);
        // this.router.navigate(['/inactive-page']);
      }
    });


  }

  OnEnter(id: any) {

    this.ChartId = id;

  }


  active(): void {
    const data = {
      templateStatus: "active",

    }

    this.database.putdata(`ypc-admin-micro-service/delete/template/${this.ChartId}`, data).subscribe({
      next: (result) => {

        console.log(result);
        this.result = result.data;
        this.GetInfo()
      },
      error: (error) => {
      },
      complete: () => {
        console.log("completed ..........");
        this.router.navigate(['template_list']);
      }
    });

  }





  edit(id: string) {


    console.log(id);
    this.router.navigate(['template_edit', id]);


  }


}
function createTemplate() {
  throw new Error('Function not implemented.');
}

