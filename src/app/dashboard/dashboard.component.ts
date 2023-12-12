import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery'
import { FormsModule } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  
  private subscription: Subscription = new Subscription();
  model:any={};
  errormsg :any;
  successmsg:any;
 
  email:any={};
  successMessage: any;
  errorMessage: any;
  result:any={};
  userName: any={};
  id:any={}
  editedUser: any = {};
  isEditing: boolean = false;
  // for_loop
  all_userdetails: any={};
  all_chefdetails: any;
 all_admindetails: any = {};
 all_deleted_videos: any[] = [];





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
  isAdminTableVisible:boolean = false;
  chefsId:any={}
  constructor(private database: DbService,private router: Router) { }



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

    if (localStorage.getItem("id")) {
      this.id = JSON.parse(localStorage.getItem("id") || '{}');
    }

    this.GetInfo();

  }


  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }
// ........start of  tables..........visible
// user
toggleUserTableVisibility() {
  this.isUserTableVisible = !this.isUserTableVisible;


  this.isChefTableVisible = false;
  this.isAdminTableVisible = false;
}
// chef
toggleChefTableVisibility() {
  this.isChefTableVisible = !this.isChefTableVisible;


  this.isUserTableVisible = false;
  this.isAdminTableVisible = false;
}
// admin
toggleAdminTableVisibility() {
  this.isAdminTableVisible = !this.isAdminTableVisible;

  this.isUserTableVisible = false;
  this.isChefTableVisible = false;
}

// .....................end of table visible...........


// gettng_infos
  GetInfo() {

let getUserDetails = {}

this.database.getData('ypc-admin-micro-service/admin/userdetails', ).subscribe((result: any) => {
  console.log('Total User Details Count:', result);

  this.all_userdetails = result.userDetails;
  this.totalUserCount = this.all_userdetails.length; 


  // console.log('Total User Details Count:', this.totalUserCount);
  

},);








let getChefDetails = {}

this.database.getData('ypc-admin-micro-service/admin/chefdetails', ).subscribe((result: any) => {
  this.all_chefdetails = result.chefDetails;
  this.totalChefCount = this.all_chefdetails.length

  // console.log('Total chef Details Count:', this.totalChefCount);


  

},);


let getAdminDetails = {}

this.database.getData('ypc-admin-micro-service/alladmin', ).subscribe((result: any) => {
   
  this.all_admindetails = result;
 

  this.totalAdminCount = this.all_admindetails.length;

  // console.log('Total admin Details Count:', this.totalAdminCount);

},);











  // not approved videos
  
      this.database.getData('ypc-admin-micro-service/ypc/admin/chef/allvideos').subscribe(
        (result: any) => {
   
          this.all_newChefVideos = result.Notapproved.length;
          const videoIds = this.all_newChefVideos.map(video => video.id);
   console.log( this.all_newChefVideos);
   
        },
      );
  
  // approved videos
  
     this.database.getData('ypc-admin-micro-service/admin/chef/approved/allvideos', ).subscribe((result: any) => {
  
      // console.log( result);
  
      this.all_notapproved_videos = result.approved.length;
   console.log(  this.all_notapproved_videos);

     
  },);
  
  
  // deleted  videos
  
  this.database.getData('ypc-admin-micro-service/admin/chef/deleted/allvideos', ).subscribe((result: any) => {
  
      // console.log( result);
  
    this.all_deleted_videos = result.deletedvideos.length;

   console.log(  this.all_deleted_videos);

  
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








// add_admin_popup
  AddAdmin(form: NgForm): void{

    if (!form.valid) {


    }else {

      let data = {
        "data": this.datas,
        "userName": this.model.userName,
        "email": this.model.email,
        "password": this.model.password
      };

      this.database.postdata('ypc-admin-micro-service/admin/register/'+ this.id, data).subscribe({
        next: (result) => {
          // console.log(result);
          this.result = result.data;
          this.succesMsg('Admin added successfully')
          // this.addadminpopup.dismiss('Cross click');
         
          
        },
        
        
        error: (error) => {
          console.log(error);
         
          this.errorMsg(error.error.error);

        },
        
        complete: () => {
 // reload page 
 this.router.navigateByUrl('dashboard', { skipLocationChange: true }).then(() => {
  this.router.navigate([this.router.url]);
});
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
