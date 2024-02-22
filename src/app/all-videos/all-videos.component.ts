import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../services/db.service';
@Component({
  selector: 'app-all-videos',
  templateUrl: './all-videos.component.html',
  styleUrls: ['./all-videos.component.css']
})
export class AllVideosComponent implements OnInit {
  // searchQuery: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  all_newChefVideos: any[] = [];
  videoIdnew: any={};
  video_full: any ={};
  p:number =1;
  itemsPerPage:number =8;
  // video_full: any;
  video_fulldetail :any[]=[];
  totalProduct:any;
  filteredVideos: any[] = [];
  searchQuery: string = '';
  // new: any[];
  base_url = "http://localhost:4000/upload/";

  constructor(private database: DbService, private router: Router) {}

  filterVideos() {
    this.filteredVideos = this.video_fulldetail.filter((video: Video) => {
      const searchText = this.searchQuery.toLowerCase();
      return (
        video.text.toLowerCase().includes(searchText) ||
        video.internationalCuisine.toLowerCase().includes(searchText) ||
        video.nationalCuisine.toLowerCase().includes(searchText)
      );
    });
  }
  
  onSearch() {
    this.filterVideos();
  }

  ngOnInit(): void {
  
   
    
    this.GetInfo();

   


    
  }



  navigateToVideoDetail(id: any): void {
    // alert(id)
    // console.log("click",id)
    // console.log("allcontent",this.all_newChefVideos)
    this.router.navigate(['/videodetails'], { state: { id } });
  
    
  }

  GetInfo() {
   
   
    
    this.database.getData('ypc-admin-micro-service/admin/totalvideos', ).subscribe((result: any) => {
    

      this.video_fulldetail = result.totalVideos;
      // this.video_full = result.totalVideos.videoUrl;

     console.log(this.video_fulldetail);
    this.totalProduct = result.length;
    
    },);
    
    
    
    
    }
    
    
      
     
    
     
    
    
    
    
    
    
    
    
    
    
   
    
    }

    export interface Video {
      id: string;
      chefId: string;
      text: string;
      internationalCuisine: string;
      nationalCuisine: string;
      productCategory: string;
      productServeCategory: string;
      productType: string;
      steps: any;
      videoUrl: string;
      description: string;
      adminApproved: number;
      approvedBy: string;
      underReview: number;
      isDeleted: number;
      deleteCommand: string;
      likes: string;
      createdBy: string;
      updatedBy: string;
      createdAt: string;
      updatedAt: string;
    }

    


