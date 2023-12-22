import { DbService } from 'src/app/services/db.service';
import { Router } from '@angular/router';
import { EncryptionService } from '../services/encryption.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit  {
  all_userdetails: any={};
  totalUserCount: any;

  constructor(private database: DbService, private router: Router, private encryptionService: EncryptionService) { }

  ngOnInit() {

 
    this.GetInfo();

  }

  GetInfo() {

    let getUserDetails = {}

    this.database.getData('ypc-admin-micro-service/template/1',).subscribe((result: any) => {
      console.log('Total User Details Count:', result);

      this.all_userdetails = result.chartDetails;
      this.totalUserCount = this.all_userdetails.length;

      console.log(this.all_userdetails);


    },);


  }



edit(id :string){


  console.log(id);
  this.router.navigate(['template_edit', id]); 


}

  
}
