import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-all-videos',
  templateUrl: './all-videos.component.html',
  styleUrls: ['./all-videos.component.css']
})
export class AllVideosComponent implements OnInit {
  all_newChefVideos: any[] = [];
  videoIdnew: any={};
  video_full: any ={};

  // video_full: any;
  video_fulldetail :any[]=[];
  // new: any[];
  base_url = "http://localhost:4000/upload/";

  constructor(private database: DbService, private router: Router) {}

  ngOnInit(): void {
  
   
    
    this.GetInfo();

   


    
  }





  GetInfo() {
   
   
    
    this.database.getData('ypc-admin-micro-service/admin/totalvideos', ).subscribe((result: any) => {
    

      this.video_fulldetail = result.totalVideos;
      // this.video_full = result.totalVideos.videoUrl;

     console.log(this.video_fulldetail);
    
    },);
    
    
    
    
    }
    
    
      
     
    
     
    
    
    
    
    
    
    
    
    
    
   
    
    }



    


