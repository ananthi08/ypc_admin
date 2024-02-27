import { Component, ViewChild , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery'
import { FormsModule } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { EncryptionService } from '../services/encryption.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  searchText: any;
  

  p: number = 1; 
  itemsPerPage: number = 10;
  private subscription: Subscription = new Subscription();
  model: any = {};
  errormsg: any;
  successmsg: any;
  allAdmindetails$: Observable<any> | undefined; 
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
  // all_userdetails: any = {};
  all_userdetails: any[] = [];
  all_chefdetails: any;
  all_admindetails: any = {};
  all_deleted_videos: any[] = [];

  all_suscribed_users: any[] = [];

  all_newChefVideos: any[] = [];
  all_notapproved_videos: any[] = [];
  all_newChefVideos_1: any[] = [];
  video_fulldetail :any[]=[];
  user_getdata :any={};
  chef_getdata :any={};
  admin_getdata :any={};
  subscriber_getdata : any ={};
  userId:any={};
  chefId:any={};
  adminId:any={};
  // userName:any={};
  // email:any={};
  mobileNumber:any={};
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

popup_edituser(id:any){

this.userId=id;
   
this.database.getData(`ypc-admin-micro-service/admin/userdetail/`+this.userId).subscribe((result: any) => {   
  this.user_getdata = result.user;
},);


}


popup_editadmin(id:any){

  this.adminId=id;
     
  this.database.getData(`ypc-admin-micro-service/admin/admin/`+this.adminId).subscribe((result: any) => {   
    this.admin_getdata = result.adminUser;
    console.log(this.admin_getdata);
    
  },);
  
  
  }


popup_editsubscribed(id:any){

  this.userId=id;
     
  this.database.getData(`ypc-admin-micro-service/admin/subscriptionDetails/`+this.userId).subscribe((result: any) => {   
    this.subscriber_getdata = result.result;
    // console.log(this.subscriber_getdata);
    
  },);
  
  
  }



popup_editchef(id:any){

  this.chefId=id;
     
  this.database.getData(`ypc-admin-micro-service/admin/chefdetail/`+this.chefId).subscribe((result: any) => {
      
  
    this.chef_getdata = result.chefDetails;
   
  
  },);
  
  
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
      console.log(this.totalUserCount);
      

      this.all_userdetails.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);


    },);






    



    let getChefDetails = {}

    this.database.getData('ypc-admin-micro-service/admin/chefdetails',).subscribe((result: any) => {
      this.all_chefdetails = result.chefDetails;
      this.totalChefCount = this.all_chefdetails.length
      this.all_chefdetails.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);






    },);


    let getAdminDetails = {}

    this.database.getData('ypc-admin-micro-service/alladmin',).subscribe((result: any) => {

      this.all_admindetails = result;


      this.totalAdminCount = this.all_admindetails.length;
console.log( this.all_admindetails);



    },);







    // not approved videos
  //   if (this.id) {
  //   this.database.getData('ypc-admin-micro-service/ypc/admin/chef/allvideos/${this.id}').subscribe(
  //     (result: any) => {

  //       this.all_newChefVideos = result.Notapproved.length;
  //       const videoIds = this.all_newChefVideos.map(video => video.id);

  //     },
  //   )
  // }else {
  //   console.error("ID not available. Unable to fetch chef videos.");
  // };


  this.database.getData('ypc-admin-micro-service/admin/totalvideos', ).subscribe((result: any) => {
    

    this.video_fulldetail = result.totalVideos.length;
    // this.video_full = result.totalVideos.videoUrl;

   console.log(this.video_fulldetail);
  
  },);

  

  
 
    this.database.getData(`ypc-admin-micro-service/ypc/admin/chef/allvideos/1`).subscribe(
      (result: any) => {
    
        this.all_newChefVideos = result.Notapproved;
        this.all_newChefVideos_1 = result.Notapproved.length;
       
      //  console.log('ererere',this.all_newChefVideos_1);
      //  console.log('iidd',this.videoIdnew);
    
    
      },
    )
   

    // approved videos

    this.database.getData('ypc-admin-micro-service/admin/chef/approved/allvideos',).subscribe((result: any) => {



      this.all_notapproved_videos = result.approved.length;
      console.log(this.all_notapproved_videos);
      



    },);


    // deleted  videos

    this.database.getData('ypc-admin-micro-service/admin/chef/deleted/allvideos',).subscribe((result: any) => {



      this.all_deleted_videos = result.deletedvideos.length;
      console.log(this.all_deleted_videos);



    },);


    // get all subscried users
    this.database.getData('ypc-admin-micro-service/admin/subcribedUsers',).subscribe((result: any) => {
      // console.log(result);

      this.all_suscribed_users = [result.userDetails];

      this.totalCountSubscribed = this.all_suscribed_users.length;

      console.log('subscribed',this.all_suscribed_users);

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
  this.router.navigateByUrl('new_videos');
  // localStorage.setItem('VideosComponent',JSON.stringify('newv'));
  // localStorage.setItem('VideosComponent',JSON.stringify('appv'));
  // alert(newv);
  }



  approvedvideos(){
    this.router.navigateByUrl('app_videos');
    }

    

    rejectedvideos(){
      this.router.navigateByUrl('rej_videos');
      }




    allVideos(){
    this.router.navigateByUrl('all_videos')
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




  Edit_user(form2: NgForm,id:any): void {

    if (!form2.valid) {


    } else {

      let data = {
        "data": this.datas,
        "userName": this.user_getdata.userName,
        "mobileNumber": this.user_getdata.mobileNumber,
        "email": this.user_getdata.email,

        // "password": this.model.password
      };

      // this.database.postdata('ypc-admin-micro-service/admin/register/' + this.id, data).subscribe({
      this.database.postdata('ypc-admin-micro-service/admin/userdetail/edit/'+id, data).subscribe({

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





  Edit_admin(form5: NgForm,id:any): void {

    if (!form5.valid) {


    } else {

      let data = {
        "data": this.datas,
        "userName": this.admin_getdata.userName,
        "mobileNumber": this.admin_getdata.mobileNumber,
        "email": this.admin_getdata.email,

        // "password": this.model.password
      };

      // this.database.postdata('ypc-admin-micro-service/admin/register/' + this.id, data).subscribe({
      this.database.postdata('ypc-admin-micro-service/admin/admindetail/edit/'+id, data).subscribe({

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




  Edit_subs(form3: NgForm,id:any): void {

    if (!form3.valid) {


    } else {

      let data = {
        "data": this.datas,
        "internationalCuisine": this.user_getdata.internationalCuisine,
        "nationalCuisine": this.user_getdata.nationalCuisine,
        "familyType": this.user_getdata.familyType,
        // "plan": this.user_getdata.plan,

      };

          this.database.postdata('ypc-admin-micro-service/ypc/subscription/' + id + '/edit', data).subscribe({

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




  Edit_chef(form2: NgForm,id:any): void {
// alert('hui');
    if (form2.valid) {


    } else {

      let data = {
        "data": this.datas,
        "userName": this.chef_getdata.userName,
        "mobileNumber": this.chef_getdata.mobileNumber,
        "email": this.chef_getdata.email,
      };
        this.database.postdata('ypc-admin-micro-service/admin/chefdetail/edit/'+id, data).subscribe({

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
function edit(id: any, string: any) {
  throw new Error('Function not implemented.');
}

