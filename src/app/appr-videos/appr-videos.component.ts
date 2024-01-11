// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../services/db.service';
@Component({
  selector: 'app-appr-videos',
  templateUrl: './appr-videos.component.html',
  styleUrls: ['./appr-videos.component.css']
})
export class ApprVideosComponent {
  all_newChefVideos: any[] = [];
  base_url = "http://localhost:4000/upload/";
  all_notapproved_videos: any[] = [];
  all_deleted_videos: any[] = [];
  errormsg: any;
  successmsg: any;
  showMoreVideos = false;
  showMoreVideosnew = false;
  selectFiveChecked: boolean = false;
  selectTenChecked: boolean = false;

  selectedVideos: any[] = []; 
  showMoreRejectedVideos: boolean = false;
  id: any;
  result: any;
  currentVideoType: any;
  ProductReceipeId: any;
  location: any;
  videoDetails: any;
  selectedNumberOfVideos: string = "2";
  maxSelectedVideos: number = 1;
  video: any;
  videos:any;
  newvideoId:number | undefined;
  approvevideoId:number | undefined;
  deletevideoId:number | undefined;
  // selectedNumber: string = "2"; 
  selectedVideoFilter: string = 'all';
  filteredVideos: any[] = [];
  asignid: any;
  selectedNumber: string = '2';
  role: string | undefined;
  Superadmin:string | undefined;


  all_admindetails: any = {};

  admindetails: any = {};
  selectedAssignee: string = '';
  // checkox


  
  // selectedVideos: any[] = [];
  selectAllChecked = false;
  adminid: any;
  description: any;
  videoIdnew: any={};
  Vediotype:any={};
  
status: any;
newv: any='new videos';
  constructor(private database: DbService, private router: Router) {}

  ngOnInit(): void {
  
    if (localStorage.getItem("id")) {
      this.id = JSON.parse(localStorage.getItem("id") || '{}');
    }
    
    this.GetInfo();
    if (localStorage.getItem("VideosComponent")) {
      this.Vediotype = JSON.parse(localStorage.getItem("VideosComponent") || '{}');
      console.log(this.Vediotype);
      
    }
    if (localStorage.getItem("role")) {
      this.role = JSON.parse(localStorage.getItem("role") || '{}');
    }
  }

  applyVideoFilter() {
    switch (this.selectedVideoFilter) {
      case 'new':
        this.filteredVideos = this.all_newChefVideos;
        break;
      case 'approved':
        this.filteredVideos = this.all_notapproved_videos;
        break;
      case 'rejected':
        this.filteredVideos = this.all_deleted_videos;
        break;
      default:
        this.filteredVideos = [...this.all_newChefVideos, ...this.all_notapproved_videos, ...this.all_deleted_videos];
    }
  }


// checkocx
  isVideoAssigned(videoId: any): boolean {
    return this.selectedVideos.includes(videoId);
  }


  
  onCheckChangeAssign(videoId: any): void {
    const index = this.selectedVideos.indexOf(videoId);

    if (index === -1) {

      this.selectedVideos.push(videoId);
    } else {

      this.selectedVideos.splice(index, 1);
    }

    console.log(this.selectedVideos);
  }



 
  


  


  



  


  onSelectNumberChange(): void {
    console.log('onSelectNumberChange triggered');
  
    // Reset selectedVideos array
    this.selectedVideos = [];
  
    if (this.selectedNumber === 'all') {
      // Select all videos
      this.all_newChefVideos.forEach(video => {
        video.selected = true;
        this.selectedVideos.push(video.id);
      });
    } else {    
      const numberOfVideosToSelect = parseInt(this.selectedNumber, 10);
  
      for (let i = 0; i < Math.min(numberOfVideosToSelect, this.all_newChefVideos.length); i++) {
        const video = this.all_newChefVideos[i];
        video.selected = true;
        this.selectedVideos.push(video.id);
      }
    }
  
    // console.log(this.selectedVideos);
  }

  

  
  





  AtLeastTwoSelected(): boolean {
    return this.all_newChefVideos.filter(video => video.selected).length >= 1;
  }
  
// end of all sleect check


  toggleShowMorenew() {
    this.showMoreVideosnew = !this.showMoreVideosnew;
  }
  
  toggleShowMore() {
    this.showMoreVideos = !this.showMoreVideos;
  }
  
  toggleShowMoreRejectedVideos() {
    this.showMoreRejectedVideos = !this.showMoreRejectedVideos;
  }
  
  navigateToVideoDetail(id: any): void {
    // alert(id)
    // console.log("click",id)
    // console.log("allcontent",this.all_newChefVideos)
    this.router.navigate(['/videodetails'], { state: { id } });
  
    
  }

  



  GetInfo() {
// alladmins
    let getAdminDetails = {}

    this.database.getData('ypc-admin-micro-service/alladmin', ).subscribe((result: any) => {
       
      // this.all_admindetails = result;
      this.all_admindetails = result;
     
    // console.log(this.all_admindetails);
    
    
 
    },);


    // admins who are not assigned the videos 
    let getnotassignAdminDetails = {}

    this.database.getData('ypc-admin-micro-service/admin/unassigned/admins', ).subscribe((result: any) => {
       
      this.admindetails = result;
     
    console.log(this.admindetails);
    
    
 
    },);
// not approved videos
if (this.id) {
this.database.getData(`ypc-admin-micro-service/ypc/admin/chef/allvideos/${this.id}`).subscribe(
  (result: any) => {

    this.all_newChefVideos = result.Notapproved;
   this.videoIdnew = this.all_newChefVideos.map(video => video.id);
  //  console.log('ererere',this.all_newChefVideos);
  //  console.log('iidd',this.videoIdnew);


  },
)
}else {
  console.error("ID not available. Unable to fetch chef videos.");
}

// approved videos

   this.database.getData('ypc-admin-micro-service/admin/chef/approved/allvideos', ).subscribe((result: any) => {

    // console.log( result);

    this.all_notapproved_videos = result.approved;


    const videoIdnot = this.all_notapproved_videos.map(video => video.id);
    // console.log( videoIdnot);
   
},);


// deleted  videos

this.database.getData('ypc-admin-micro-service/admin/chef/deleted/allvideos', ).subscribe((result: any) => {

    // console.log( result);

  this.all_deleted_videos = result.deletedvideos;
  const videoIddelete = this.all_deleted_videos.map(video=> video.id);
  // console.log( videoIddelete);

},);




}


// new
newChefVideosaccept(id:any){
  this.newvideoId=  Number(id);
  console.log(this.newvideoId);  

}

newChefVideosdelete(id:any){
  this.newvideoId=  Number(id);
  console.log(this.newvideoId); 
}
// end of new


// start of approved
approvedChefVideosaccept(id:any){
  this.approvevideoId=  Number(id);
  console.log(this.approvevideoId);  

}

approvedChefVideosdelete(id:any){
  this.approvevideoId=  Number(id);
  console.log(this.approvevideoId); 
}
// end of approved





// start of deleted
deletedChefVideosaccept(id:any){
  this.deletevideoId=  Number(id);
  console.log(this.deletevideoId);  

}

deletedChefVideosdelete(id:any){
  this.deletevideoId=  Number(id);
  console.log(this.deletevideoId); 
}
// end of deleted




//////////////////////////////1st
acceptVideo(): void {
  const data = {
    "ProductReceipeId": this.newvideoId,
  };


  console.log(data);


  this.database.postdata(`ypc-admin-micro-service/admin/approve/${this.newvideoId}`, data).subscribe({
    next: (result) => {
      this.result = result.data;
      console.log(result);

      this.succesMsg('Video approved successfully');
    },
    error: (error) => {
      console.log(error);
      this.errorMsg(error.error.error);
    },
    complete: () => {
      this.router.navigateByUrl('dashboard', { skipLocationChange: true }).then(() => {
        this.router.navigate([this.router.url]);
      });
    }
  });
}

  
  deleteVideo(): void {
    const data = {
      'ProductReceipeId': this.newvideoId,
    };


    // console.log(`datadatadata${videoId}`);
    
  
    this.database.postdata(`ypc-admin-micro-service/admin/delete/${this.newvideoId}`, data).subscribe({
      next: (result) => {
        console.log(result);
        this.result = result.data;
        this.succesMsg('Video deleted successfully');
      },
      error: (error) => {
        console.log(error);
        this.errorMsg(error.error.error);
      },
      complete: () => {
      
        this.router.navigateByUrl('dashboard', { skipLocationChange: true }).then(() => {
          this.router.navigate([this.router.url]);
        });
      }
    });
  }


  asignvideo(): void {


  console.log(this.selectedAssignee);
  
    const data = {
      description: this.description,
      videosId: this.selectedVideos, 
    };

    this.database.postdata(`ypc-admin-micro-service/admin/assign/task/${this.selectedAssignee}`, data).subscribe({
      next: (result) => {
        console.log(result);
        // this.result = result.message;
        this.succesMsg(result.message);
      },
      error: (error) => {
        console.log(error);
        this.errorMsg(error.error.error);
      },
      complete: () => {
   console.log("completed ..........");
   window.location.reload();
      }
    });
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
