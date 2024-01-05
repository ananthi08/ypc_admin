import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery'
import { FormsModule } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { Subscription } from 'rxjs';

import * as CryptoJS from 'crypto-js';
import { EncryptionService } from '../services/encryption.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  searchText: any;
  


  private subscription: Subscription = new Subscription();
  model: any = {};
  errormsg: any;
  successmsg: any;

  email: any = {};
  successMessage: any;
  errorMessage: any;
  result: any = {};
  userName: any = {};
  id: number | undefined;
  role: string | undefined;
  Superadmin: string | undefined;
  editedUser: any = {};
  isEditing: boolean = false;
  // for_loop
  all_userdetails: any = {};
  all_chefdetails: any;
  all_admindetails: any = {};
  all_deleted_videos: any[] = [];

  all_suscribed_users: any[] = [];

  all_newChefVideos: any[] = [];
  all_notapproved_videos: any[] = [];




  datas: any;
  isEditMode: boolean = false;
  addadminpopup: any;
  totalUserCount: any;
  totalChefCount: any;
  totalAdminCount: any;

  // for table
  isUserTableVisible: boolean = false;
  isChefTableVisible: boolean = false;
  isAdminTableVisible: boolean = false;

  isSuscribedUsersTableVisible: boolean = false;


  chefsId: any = {}
  totalCountSubscribed: any;
  constructor(private database: DbService, private router: Router, private encryptionService: EncryptionService) { }



  // to un_subscribe_all_the_data 
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  // logout
  logout(): void {


    this.clearlocalstorage()


    this.router.navigate(['']);
  }

  // init_state
  ngOnInit(): void {
    this.GetInfo();
    if (localStorage.getItem("id")) {
      this.id = JSON.parse(localStorage.getItem("id") || '{}');
    }

    if (localStorage.getItem("role")) {
      this.role = JSON.parse(localStorage.getItem("role") || '{}');
    }



  }




  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }
  // ........start of  tables..........visible
  // user
  toggleUserTableVisibility() {
    this.isUserTableVisible = !this.isUserTableVisible;

    this.isSuscribedUsersTableVisible = false;

    this.isChefTableVisible = false;
    this.isAdminTableVisible = false;
  }
  // chef
  toggleChefTableVisibility() {
    this.isChefTableVisible = !this.isChefTableVisible;

    this.isSuscribedUsersTableVisible = false;

    this.isUserTableVisible = false;
    this.isAdminTableVisible = false;
  }
  // admin
  toggleAdminTableVisibility() {
    this.isAdminTableVisible = !this.isAdminTableVisible;


    this.isSuscribedUsersTableVisible = false;
    this.isUserTableVisible = false;
    this.isChefTableVisible = false;
  }


  // subscribed users
  toggleSubscribedUsersTableVisibility() {

    this.isSuscribedUsersTableVisible = !this.isSuscribedUsersTableVisible;
    this.isAdminTableVisible = false
    this.isUserTableVisible = false;
    this.isChefTableVisible = false;
  }


  // .....................end of table visible...........


  // gettng_infos
  GetInfo() {

    let getUserDetails = {}

    this.database.getData('ypc-admin-micro-service/admin/userdetails',).subscribe((result: any) => {
      console.log('Total User Details Count:', result);

      this.all_userdetails = result.userDetails;
      this.totalUserCount = this.all_userdetails.length;




    },);








    let getChefDetails = {}

    this.database.getData('ypc-admin-micro-service/admin/chefdetails',).subscribe((result: any) => {
      this.all_chefdetails = result.chefDetails;
      this.totalChefCount = this.all_chefdetails.length






    },);


    let getAdminDetails = {}

    this.database.getData('ypc-admin-micro-service/alladmin',).subscribe((result: any) => {

      this.all_admindetails = result;


      this.totalAdminCount = this.all_admindetails.length;



    },);







    // not approved videos

    this.database.getData('ypc-admin-micro-service/ypc/admin/chef/allvideos').subscribe(
      (result: any) => {

        this.all_newChefVideos = result.Notapproved.length;
        const videoIds = this.all_newChefVideos.map(video => video.id);

      },
    );

    // approved videos

    this.database.getData('ypc-admin-micro-service/admin/chef/approved/allvideos',).subscribe((result: any) => {



      this.all_notapproved_videos = result.approved.length;



    },);


    // deleted  videos

    this.database.getData('ypc-admin-micro-service/admin/chef/deleted/allvideos',).subscribe((result: any) => {



      this.all_deleted_videos = result.deletedvideos.length;



    },);


    // get all subscried users
    this.database.getData('ypc-admin-micro-service/admin/subcribedUsers',).subscribe((result: any) => {
      console.log(result);

      this.all_suscribed_users = [result.userDetails];

      this.totalCountSubscribed = this.all_suscribed_users.length;

      console.log('subscribed',this.totalCountSubscribed);

    },);



  }


  // edit delete functions....................................................................
  editUser(user: any): void {
    this.isEditing = true;
    this.editedUser = { ...user };
    // console.log('Editing user:', user);
  }


  saveChanges(): void {

    console.log('Saving changes:', this.editedUser);

    this.isEditing = false;
    this.editedUser = {};
  }

  cancelEdit(): void {

    this.isEditing = false;
    this.editedUser = {};
  }



  deleteUser(userId: string): void {

    console.log('Deleting user with ID:', userId);




    this.database.deleteData('ypc-admin-micro-service/user/profile/delete/' + userId).subscribe({
      next: (result) => {
        console.log(result);
        this.result = result.data;
        this.succesMsg(result.message);
      },
      error: (error) => {
        console.log(error);
        this.errorMsg(error.error.error);
      },
      complete: () => {
        // Reload 

        setTimeout(() => {

          window.location.reload();
        }, 2000);
      },
    });
  }
  // =================================================


  editChef(chef: any): void {

    console.log('Editing chef:', chef);
  }



  // deleting cheffby his id
  deleteChef(chefsId: string): void {
    console.log('Deleting chef with ID:', chefsId);

    this.database.deleteData('ypc-admin-micro-service/chef/profile/delete/' + chefsId).subscribe({
      next: (result) => {
        console.log(result);
        this.result = result.data;
        this.succesMsg(result.message);
      },
      error: (error) => {
        console.log(error);
        this.errorMsg(error.error.error);
      },
      complete: () => {
        // Reload 
        window.location.reload();
      },
    });
  }


  generateNumbers(count: number): number[] {
    return Array.from({ length: count }, (_, index) => index + 1);
  }

  // end of delete and edit functions .................................................................



  VideosComponent(){
  this.router.navigateByUrl('VideosComponent')
  }




  // add_admin_popup
  AddAdmin(form2: NgForm): void {

    if (!form2.valid) {


    } else {

      let data = {
        "data": this.datas,
        "userName": this.model.userName,
        "email": this.model.email,
        "password": this.model.password
      };

      // this is for encrypt
      // const encryptedData = this.encryptionService.encrypt(data);
      // console.log(data);

      // this is for decrypt
      // const decryptedData = this.encryptionService.decrypt(encryptedData);


      this.database.postdata('ypc-admin-micro-service/admin/register/' + this.id, data).subscribe({
        next: (result) => {

          this.result = result.data;




        },


        error: (error) => {
          console.log(error);

          this.errorMsg(error.error.error);

        },

        complete: () => {
          window.location.reload();
          // reload page 
          this.router.navigateByUrl('dashboard', { skipLocationChange: true }).then(() => {
            this.router.navigate([this.router.url]);
          });
          this.succesMsg('Admin added successfully')
        }
      });



    }

  }





  // delting admin by superadmin
  deleteAdmin(adminId: any) {

    console.log('Deleting admin with ID:', adminId);
    let data = {

    }


    this.database.postdata('ypc-admin-micro-service/delete/admin/' + adminId, data).subscribe({
      next: (result) => {
        console.log(result);
        this.result = result.data;
        this.succesMsg(result.message);
      },
      error: (error) => {
        console.log(error);
        this.errorMsg(error.error.error);
      },
      complete: () => {
        // Reload 

        setTimeout(() => {

          window.location.reload();
        }, 2000);
      },
    });
  }



  // clearance for local
  clearlocalstorage(): void {
    sessionStorage.clear();
    localStorage.clear();
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
