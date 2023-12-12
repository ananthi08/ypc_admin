import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-videospagelist',
  templateUrl: './videospagelist.component.html',
  styleUrls: ['./videospagelist.component.css']
})
export class VideospagelistComponent implements OnInit {
  videoDetails: any;
  id: any;
  result: any;
  successmsg: any;
  errormsg: any;
  base_url = "http://localhost:4000/upload/";
  currentVideoType: any;
  ProductReceipeId: any;
  location: any;
 
  constructor(private database: DbService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const navigationState = window.history.state;
    this.videoDetails = navigationState.videoDetails;
    this.ProductReceipeId = navigationState.videoDetails.id; 
  
 


    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.clearVideoDetails();
    });
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
  



  // clearance for local
  clearlocalstorage(): void {
    sessionStorage.clear();
    localStorage.clear();
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
