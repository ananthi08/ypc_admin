import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery'

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  
})


export class TemplatesComponent implements OnInit  
{
  
  
  constructor(private database: DbService,private router: Router) { 
    
  }

  dishes: any={};
  mainDishArray11: any[]=[];
  SideDishArray: any[]=[];
  mainDishArray: any={};
  dropdownList = [];
  selectedItems = [];
  // dropdownSettings = {};
  internationalCuisine :any={};
  nationalCuisine: any={};
  foodPreference:any={};
  maindish:any={};

// mahi usecase
  dishSelect:any;



  dishSelect1:any;
  interNationSelect:any;
  NationSelect:any;


  ngOnInit() {

    this.GetInfo();

  }



  
  GetInfo() 
  {



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

  
    console.log("Sara", this.nationalCuisine);
  },
);




// get national cuisne
// this.database.getData('ypc-admin-micro-service/ypc/admin/chef/allvideos').subscribe(
//   (result: any) => {

//     this.nationalCuisine = result;

// console.log( this.nationalCuisine);

//   },
// );




  } 


  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  
  onClick(form: NgForm) {

    if (this.internationalCuisine && this.nationalCuisine && this.foodPreference) {
      // const apiUrl = 'ypc-admin-micro-service/admin/template/getProducts/2';
     
      let food = "?nationalCuisine="+this.NationSelect+"&internationalCuisine="+this.interNationSelect+"&productType="+this.foodPreference;
  
     
  
      this.database.getData('ypc-admin-micro-service/admin/template/getProducts/2'+food).subscribe(
        (result: any={}) => 
      {
        
        // console.log("sfgvrgvdgvdrt"+result.maindish);
        // console.log(result);
        // console.log("--------------");
        // console.log(this.dishes);

        // this.dishes = result;

        // console.log("dsf"+this.dishes);
        

        this.mainDishArray11 = result.mainDish; 

        // this.mainDishArray11= [{"name":'dosa'},{"name":'idly'},{"name":'upma'}];
        console.log("testing",this.mainDishArray11);

        this.SideDishArray = result.sideDish; 
        console.log("testing",this.SideDishArray);

   
      }
        );
    } else {
      // console.log('Please select all required values');
      alert('rtgr');
    }
  }
  save(arg0: any) {
    throw new Error('Method not implemented.');
    }
  
}
