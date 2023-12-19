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

  id:any={};
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
  sidedishSelect:any;
  interNationSelect: any[] = [];
  NationSelect:any;
  adminId:any;
  dishSelect1:any;
  dishSelect2:any;
  dishSelect3:any;
  dishSelect4:any;
  dishSelect5:any;
  dishSelect6:any;
  dishSelect7:any;
  dishSelect8:any;
  dishSelect9:any;
  dishSelect10:any;
  dishSelect11:any;
  dishSelect12:any;
  dishSelect13:any;
  dishSelect14:any;
  dishSelect15:any;
  dishSelect16:any;
  dishSelect17:any;
  dishSelect18:any;
  dishSelect19:any;
  dishSelect20:any;
  sidedishSelect1:any;
  sidedishSelect2:any;
  sidedishSelect3:any;
  sidedishSelect4:any;
  sidedishSelect5:any;
  sidedishSelect6:any;
  sidedishSelect7:any;
  sidedishSelect8:any;
  sidedishSelect9:any;
  sidedishSelect10:any;
  sidedishSelect11:any;
  sidedishSelect12:any;
  sidedishSelect13:any;
  sidedishSelect14:any;
  sidedishSelect15:any;
  sidedishSelect16:any;
  sidedishSelect17:any;
  sidedishSelect18:any;
  sidedishSelect19:any;
  sidedishSelect20:any;

  ngOnInit() {

    if (localStorage.getItem("id")) {
      this.id = JSON.parse(localStorage.getItem("id") || '{}');
    }
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


  } 

  createTemplate(): void {


    console.log(this.interNationSelect);
    console.log(this.NationSelect);
    
      const data = {

        adminId:this.id,
        internationalCuisine: [this.interNationSelect],
        nationalCuisine: [this.NationSelect],
        foodPreference:this.foodPreference,
        chart:
    [
            {
            "Monday":{
                        "maindish": [
                                        {"breakfast":this.dishSelect,"lunch":this.dishSelect1,"dinner":this.dishSelect2}
                        ],
                        "sidedish":[
                                        {"breakfast":this.sidedishSelect,"lunch":this.sidedishSelect1,"dinner":this.sidedishSelect2}
                        ]
                    },
                        
        
            }     ,
            {
              "Tuesday":{
                          "maindish": [
                                          {"breakfast":this.dishSelect3,"lunch":this.dishSelect4,"dinner":this.dishSelect5}
                          ],
                          "sidedish":[
                                          {"breakfast":this.sidedishSelect3,"lunch":this.sidedishSelect4,"dinner":this.sidedishSelect5}
                          ]
                      },
                          
          
              }    ,
              {
                "Wednesday":{
                            "maindish": [
                                            {"breakfast":this.dishSelect6,"lunch":this.dishSelect7,"dinner":this.dishSelect8}
                            ],
                            "sidedish":[
                                            {"breakfast":this.sidedishSelect6,"lunch":this.sidedishSelect7,"dinner":this.sidedishSelect8}
                            ]
                        },
                            
            
                }    ,
                {
                  "Thursday":{
                              "maindish": [
                                              {"breakfast":this.dishSelect9,"lunch":this.dishSelect10,"dinner":this.dishSelect11}
                              ],
                              "sidedish":[
                                              {"breakfast":this.sidedishSelect9,"lunch":this.sidedishSelect10,"dinner":this.sidedishSelect11}
                              ]
                          },
                              
              
                  }   , 
                  {
                    "Friday":{
                                "maindish": [
                                                {"breakfast":this.dishSelect12,"lunch":this.dishSelect13,"dinner":this.dishSelect14}
                                ],
                                "sidedish":[
                                                {"breakfast":this.sidedishSelect12,"lunch":this.sidedishSelect13,"dinner":this.sidedishSelect14}
                                ]
                            },
                                
                
                    }    ,
                    {
                      "Saturday":{
                                  "maindish": [
                                                  {"breakfast":this.dishSelect15,"lunch":this.dishSelect16,"dinner":this.dishSelect17}
                                  ],
                                  "sidedish":[
                                                  {"breakfast":this.sidedishSelect15,"lunch":this.sidedishSelect16,"dinner":this.sidedishSelect17}
                                  ]
                              },
                                  
                  
                      }    ,
                      {
                        "Sunday":{
                                    "maindish": [
                                                    {"breakfast":this.dishSelect18,"lunch":this.dishSelect19,"dinner":this.dishSelect20}
                                    ],
                                    "sidedish":[
                                                    {"breakfast":this.sidedishSelect18,"lunch":this.sidedishSelect19,"dinner":this.sidedishSelect20}
                                    ]
                                },
                                    
                    
                        }    


    ]
    
      };
  console.log(data);
  
      this.database.postdata(`ypc-admin-micro-service/admin/template/1`, data).subscribe({
        next: (result) => {
          console.log(result);
          // this.result = result.message;
          // this.succesMsg(this.result);
        },
        error: (error) => {
          // console.log(error);
          // this.errorMsg(error.error.error);
        },
        complete: () => {
     console.log("completed ..........");
     
        }
      });
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
  
     
  
      this.database.getData('ypc-admin-micro-service/admin/template/getProducts/1'+food).subscribe(
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
