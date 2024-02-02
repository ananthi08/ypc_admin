import { Component, OnInit } from '@angular/core';
import {  NavigationEnd, Router , NavigationExtras, } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-video-describe',
  templateUrl: './video-describe.component.html',
  styleUrls: ['./video-describe.component.css']
})
export class VideosDescribe  implements OnInit {
  videoDetails: any;
  id: any;
  result: any;
  successmsg: any;
  errormsg: any;
  base_url = "http://localhost:4000/upload/";
  currentVideoType: any;
  ProductReceipeId: any;
  location: any;
  video:any;
  videosList: any[] = [];
  videosList1: any[] = [];
  videosList11: any[] = [];
  video_fulldetail :any;
  video_full: any;

  constructor(private database: DbService ,private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Navigation end event:', event);
      }
    });
  }

  ngOnInit(): void {
    const navigationState = window.history.state;
    this.videoDetails = navigationState.id;
    
    // }

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.clearVideoDetails();
    });
    this.GetInfo();
  }

  

  GetInfo() {

    let getUserDetails = {}

      this.database.getData(`ypc-admin-micro-service/video/detail/${this.videoDetails}`)
      .subscribe((result: any) => {
        this.videosList = result.videosList;
        this.video_fulldetail = result.products;
        this.video_full = result.products.videoUrl;
        this.videosList11 = result.products[0];
      
        
        
      });
      
  }
 

  allVideos( id: any){
    this.router.navigate(['/videodetails1'], { state: { id } });
    }


  private clearVideoDetails(): void {
    this.videoDetails = null;
  }

  acceptVideo(): void {
    const data = {
      "ProductReceipeId": this.id,
    };
  
    this.database.postdata(`ypc-admin-micro-service/admin/approve/${this.ProductReceipeId}`, data).subscribe({
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
      'ProductReceipeId': this.id,
    };
  
    this.database.postdata(`ypc-admin-micro-service/admin/delete/${this.ProductReceipeId}`, data).subscribe({
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
  



  succesMsg(msg: any): void {
    this.successmsg = msg;
    $('#collapseExample1').show();
    setTimeout(() => {
      $('#collapseExample1').hide();
    }, 3000);
  }

  errorMsg(msg: any): void {
    this.errormsg = msg;
    $('#collapseExample').show();
    setTimeout(() => {
      $('#collapseExample').hide();
    }, 3000);
  }
}