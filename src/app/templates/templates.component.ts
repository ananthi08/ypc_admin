import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery'

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit  {
  dishes: any={};
mainDishArray1: any;
  mainDishArray11: any=[];
  
save(arg0: any) {
throw new Error('Method not implemented.');
}
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  internationalCuisine :any=[];
  nationalCuisine: any={};
  foodPreference:any={};
  mainDishArray:any;
  maindish:any={};
  // name:any={};
  constructor(private database: DbService,private router: Router) { }



  ngOnInit() {


    this.GetInfo();

  }



  GetInfo() {


// getinternational cuisne
//     this.database.getData('ypc-admin-micro-service/admin/international/cuisine').subscribe(
//       (result: any) => {
 
//         this.internationalCuisine = result.cuisine;

//  console.log( this.internationalCuisine);
 
//       },
//     );



// Assuming 'this.database.getData' returns an observable
this.database.getData('ypc-admin-micro-service/admin/international/cuisine').subscribe(
  (result: any[]) => {

    this.internationalCuisine = result.map(item => item.cuisine);

  
    console.log(this.internationalCuisine);
  },
);


this.database.getData('ypc-admin-micro-service/admin/national/cuisine').subscribe(
  (result: any[]) => {

    this.nationalCuisine = result.map(item => item.cuisine);

  
    console.log(this.nationalCuisine);
  },
);




// get national cuisne
this.database.getData('ypc-admin-micro-service/ypc/admin/chef/allvideos').subscribe(
  (result: any) => {

    this.nationalCuisine = result;

console.log( this.nationalCuisine);

  },
);




  } 


  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  
  onClick() {

    if (this.internationalCuisine && this.nationalCuisine && this.foodPreference) {
      // const apiUrl = 'ypc-admin-micro-service/admin/template/getProducts/2';
     
      let food = "?nationalCuisine="+this.nationalCuisine+"&internationalCuisine="+this.internationalCuisine+"&productType="+this.foodPreference;
  
     
  
      this.database.getData('ypc-admin-micro-service/admin/template/getProducts/2'+food).subscribe((result: any={}) => 
      {
        
        // console.log("sfgvrgvdgvdrt"+result.maindish);
        // console.log(result);
        // console.log("--------------");
        // console.log(this.dishes);

        // this.dishes = result;

        // console.log("dsf"+this.dishes);


        // this.mainDishArray11 = result.mainDish; 
        // console.log("testing",this.mainDishArray11);


  // const sideDishArray = result.sideDish;
  // console.log(sideDishArray);

        for (const dish of this.mainDishArray11) {
          console.log(`Name: ${dish.name}`);
        }
        alert();
      });
    } else {
      console.log('Please select all required values');
    }
  }
  
  
}
