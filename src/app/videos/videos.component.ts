import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  all_newChefVideos: any[] = [];
  base_url = "http://localhost:4000/upload/";
  all_notapproved_videos: any[] = [];
  all_deleted_videos: any[] = [];
  errormsg: any;
  successmsg: any;
  showMoreVideos = false;
  showMoreVideosnew = false;

  showMoreRejectedVideos: boolean = false;
  id: any;
  result: any;
  currentVideoType: any;
  ProductReceipeId: any;
  location: any;
  videoDetails: any;


  video: any;
  videos:any;
  newvideoId:number | undefined;
  approvevideoId:number | undefined;
  deletevideoId:number | undefined;





  selectedVideoFilter: string = 'all';
  filteredVideos: any[] = [];


  constructor(private database: DbService, private router: Router) {}

  ngOnInit(): void {

    // const navigationState = window.history.state;
    // this.videoDetails = navigationState.videoDetails;
    // this.ProductReceipeId = navigationState.videoDetails.id; 
  
    // this.clearlocalstorage();


    this.GetInfo();
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




  toggleShowMorenew() {
    this.showMoreVideosnew = !this.showMoreVideosnew;
  }
  
  toggleShowMore() {
    this.showMoreVideos = !this.showMoreVideos;
  }
  
  toggleShowMoreRejectedVideos() {
    this.showMoreRejectedVideos = !this.showMoreRejectedVideos;
  }
  
  navigateToVideoDetail(videoDetails: any): void {
    this.router.navigate(['/video'], { state: { videoDetails } });
  
    
  }



  GetInfo() {


// not approved videos

    

// approved videos

   this.database.getData('ypc-admin-micro-service/admin/chef/approved/allvideos', ).subscribe((result: any) => {

    // console.log( result);

    this.all_notapproved_videos = result.approved;


    const videoIdnot = this.all_notapproved_videos.map(video => video.id);
    console.log( videoIdnot);
   
},);


// deleted  videos

this.database.getData('ypc-admin-micro-service/admin/chef/deleted/allvideos', ).subscribe((result: any) => {

    // console.log( result);

  this.all_deleted_videos = result.deletedvideos;
  const videoIddelete = this.all_deleted_videos.map(video=> video.id);
  console.log( videoIddelete);

},);


this.database.getData('ypc-admin-micro-service/ypc/admin/chef/allvideos').subscribe(
  (result: any) => {

    this.all_newChefVideos = result.Notapproved;
    const videoIdnew = this.all_newChefVideos.map(video => video.id);
console.log( videoIdnew);

  },
);

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
  ///////////////////////1st end 


  // 2nd start



  accept2Video(): void {
    const data = {
      "ProductReceipeId": this.approvevideoId,
    };
  
  
    console.log(data);
  
    this.database.postdata(`ypc-admin-micro-service/admin/approve/${this.approvevideoId}`, data).subscribe({
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
  
    
    delete2Video(): void {
      const data = {
        'ProductReceipeId': this.approvevideoId,
      };
      console.log(`datadatadata${this.approvevideoId}`);
    
      this.database.postdata(`ypc-admin-micro-service/admin/delete/${this.approvevideoId}`, data).subscribe({
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
    // 2nd end


    // 3rd start


    accept3Video(): void {
      const data = {
        "ProductReceipeId": this.deletevideoId,
      };
    
    
      console.log(data);
    
      this.database.postdata(`ypc-admin-micro-service/admin/approve/${this.deletevideoId}`, data).subscribe({
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
    
      
      delete3Video(): void {
        const data = {
          'ProductReceipeId': this.deletevideoId,
        };
      
        this.database.postdata(`ypc-admin-micro-service/admin/delete/${this.deletevideoId}`, data).subscribe({
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
