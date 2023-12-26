import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-template-edit',
  templateUrl: './template-edit.component.html',
  styleUrls: ['./template-edit.component.css']
  
})



export class TemplateEditComponent implements OnInit  
{
  
  
  constructor(private database: DbService,private router: Router,private route: ActivatedRoute) { 
  
  }

 

 

  

  all_userdetails: any={};

  id:any={};
  dishes: any={};
  mainDishArray11: any[]=[];

  // mainDishArray11: any={};

  SideDishArray: any[]=[];
  mainDishArray: any={};
  dropdownList = [];
  selectedItems = [];
  // dropdownSettings = {};
  internationalCuisine :any={};
  nationalCuisine: any={};
  foodPreference:any;
  maindish:any={};
  chartDetails:any={};
  country:any={};


  dishSelect: any = "";
  sidedishSelect:any="";
  interNationSelect: any = "";
  NationSelect:any = "";
  adminId:any;
  dishSelect1: any = "";
  dishSelect2: any = "";
  dishSelect3:any = "";
  dishSelect4:any = "";
  dishSelect5:any = "";
  dishSelect6:any = "";
  dishSelect7:any = "";
  dishSelect8:any = "";
  dishSelect9:any = "";
  dishSelect10:any = "";
  dishSelect11:any = "";
  dishSelect12:any = "";
  dishSelect13:any = "";
  dishSelect14:any = "";
  dishSelect15:any = "";
  dishSelect16:any = "";
  dishSelect17:any = "";
  dishSelect18:any = "";
  dishSelect19:any = "";
  dishSelect20:any = "";
  sidedishSelect1:any = "";
  sidedishSelect2:any = "";
  sidedishSelect3:any = "";
  sidedishSelect4:any = "";
  sidedishSelect5:any = "";
  sidedishSelect6:any = "";
  sidedishSelect7:any = "";
  sidedishSelect8:any = "";
  sidedishSelect9:any = "";
  sidedishSelect10:any = "";
  sidedishSelect11:any = "";
  sidedishSelect12:any = "";
  sidedishSelect13:any = "";
  sidedishSelect14:any = "";
  sidedishSelect15:any = "";
  sidedishSelect16:any = "";
  sidedishSelect17:any = "";
  sidedishSelect18:any = "";
  sidedishSelect19:any = "";
  sidedishSelect20:any = "";
  chartList:any=[];

   async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

  ngOnInit() {

    if (localStorage.getItem("id")) {
      // this.id = JSON.parse(localStorage.getItem("id") || '{}');
    }



    this.route.params.subscribe(params => {
      this.id  = params['id'];
      // console.log('ID from route parameter:', id);
      this.GetInfo(); 
    });
    // this.GetInfo();
    // this.onClick()

    
  }
 


  
  GetInfo() 
  {


// Assuming 'this.database.getData' returns an observable
this.database.getData('ypc-admin-micro-service/admin/international/cuisine').subscribe(
  (result: any[]) => {

    this.internationalCuisine = result.map(item => item.cuisine);

  
    // console.log('hello',this.internationalCuisine);
  },
);


this.database.getData('ypc-admin-micro-service/admin/national/cuisine').subscribe(
  (result: any[]) => {

    this.nationalCuisine = result.map(item => item.cuisine);

  
    // console.log("", this.nationalCuisine);
  },
);


this.database.getData(`ypc-admin-micro-service/gettemplate/${this.id}`).subscribe(
  (result: any[]) => {
   

    this.nationalCuisine = result;
    console.log("test",this.nationalCuisine);
    this.interNationSelect = this.nationalCuisine.chartDetails[0]['internationalCuisine'];
    this.NationSelect = this.nationalCuisine.chartDetails[0]['nationalCuisine'];
    this.foodPreference = this.nationalCuisine.chartDetails[0]['foodPreference'];
    this.chartList = this.nationalCuisine.chartDetails[0]['chart'];
    this.dishSelect = this.nationalCuisine.chartDetails[0]['chart'][0]['monday'].maindish[0]['breakfast'];
    console.log("monday",this.dishSelect)
    this.dishSelect1 = this.nationalCuisine.chartDetails[0]['chart'][0]['monday'].maindish[0]['lunch'];
    this.dishSelect2 = this.nationalCuisine.chartDetails[0]['chart'][0]['monday'].maindish[0]['dinner'];
    this.dishSelect3 = this.nationalCuisine.chartDetails[0]['chart'][1]['tuesday'].maindish[0]['breakfast'];
    this.dishSelect4 = this.nationalCuisine.chartDetails[0]['chart'][1]['tuesday'].maindish[0]['lunch'];
    this.dishSelect5 = this.nationalCuisine.chartDetails[0]['chart'][1]['tuesday'].maindish[0]['dinner'];
    this.dishSelect6 = this.nationalCuisine.chartDetails[0]['chart'][2]['wednesday'].maindish[0]['breakfast'];
    this.dishSelect7 = this.nationalCuisine.chartDetails[0]['chart'][2]['wednesday'].maindish[0]['lunch'];
    this.dishSelect8 = this.nationalCuisine.chartDetails[0]['chart'][2]['wednesday'].maindish[0]['dinner'];
    this.dishSelect9 = this.nationalCuisine.chartDetails[0]['chart'][3]['thursday'].maindish[0]['breakfast'];
    this.dishSelect10 = this.nationalCuisine.chartDetails[0]['chart'][3]['thursday'].maindish[0]['lunch'];
    this.dishSelect11= this.nationalCuisine.chartDetails[0]['chart'][3]['thursday'].maindish[0]['dinner'];
    this.dishSelect12= this.nationalCuisine.chartDetails[0]['chart'][4]['friday'].maindish[0]['breakfast'];
    this.dishSelect13= this.nationalCuisine.chartDetails[0]['chart'][4]['friday'].maindish[0]['lunch'];
    this.dishSelect14 = this.nationalCuisine.chartDetails[0]['chart'][4]['friday'].maindish[0]['dinner'];
    this.dishSelect15= this.nationalCuisine.chartDetails[0]['chart'][5]['saturday'].maindish[0]['breakfast'];
    this.dishSelect16 = this.nationalCuisine.chartDetails[0]['chart'][5]['saturday'].maindish[0]['lunch'];
    this.dishSelect17= this.nationalCuisine.chartDetails[0]['chart'][5]['saturday'].maindish[0]['dinner'];
    this.dishSelect18= this.nationalCuisine.chartDetails[0]['chart'][6]['sunday'].maindish[0]['breakfast'];
    this.dishSelect19= this.nationalCuisine.chartDetails[0]['chart'][6]['sunday'].maindish[0]['lunch'];
    this.dishSelect20= this.nationalCuisine.chartDetails[0]['chart'][6]['sunday'].maindish[0]['dinner'];
    
    this.sidedishSelect = this.nationalCuisine.chartDetails[0]['chart'][0]['monday'].sidedish[0]['breakfast'];
    this.sidedishSelect1 = this.nationalCuisine.chartDetails[0]['chart'][0]['monday'].sidedish[0]['lunch'];
    this.sidedishSelect2 = this.nationalCuisine.chartDetails[0]['chart'][0]['monday'].sidedish[0]['dinner'];
    this.sidedishSelect3 = this.nationalCuisine.chartDetails[0]['chart'][1]['tuesday'].sidedish[0]['breakfast'];
    this.sidedishSelect4= this.nationalCuisine.chartDetails[0]['chart'][1]['tuesday'].sidedish[0]['lunch'];
    this.sidedishSelect5= this.nationalCuisine.chartDetails[0]['chart'][1]['tuesday'].sidedish[0]['dinner'];
    this.sidedishSelect6 = this.nationalCuisine.chartDetails[0]['chart'][2]['wednesday'].sidedish[0]['breakfast'];
    this.sidedishSelect7= this.nationalCuisine.chartDetails[0]['chart'][2]['wednesday'].sidedish[0]['lunch'];
    this.sidedishSelect8 = this.nationalCuisine.chartDetails[0]['chart'][2]['wednesday'].sidedish[0]['dinner'];
    this.sidedishSelect9 = this.nationalCuisine.chartDetails[0]['chart'][3]['thursday'].sidedish[0]['breakfast'];
    this.sidedishSelect10= this.nationalCuisine.chartDetails[0]['chart'][3]['thursday'].sidedish[0]['lunch'];
    this.sidedishSelect11= this.nationalCuisine.chartDetails[0]['chart'][3]['thursday'].sidedish[0]['dinner'];
    this.sidedishSelect12= this.nationalCuisine.chartDetails[0]['chart'][4]['friday'].sidedish[0]['breakfast'];
    this.sidedishSelect13= this.nationalCuisine.chartDetails[0]['chart'][4]['friday'].sidedish[0]['lunch'];
    this.sidedishSelect14= this.nationalCuisine.chartDetails[0]['chart'][4]['friday'].sidedish[0]['dinner'];
    this.sidedishSelect15= this.nationalCuisine.chartDetails[0]['chart'][5]['saturday'].sidedish[0]['breakfast'];
    this.sidedishSelect16 = this.nationalCuisine.chartDetails[0]['chart'][5]['saturday'].sidedish[0]['lunch'];
    this.sidedishSelect17= this.nationalCuisine.chartDetails[0]['chart'][5]['saturday'].sidedish[0]['dinner'];
    this.sidedishSelect18= this.nationalCuisine.chartDetails[0]['chart'][6]['sunday'].sidedish[0]['breakfast'];
    this.sidedishSelect19= this.nationalCuisine.chartDetails[0]['chart'][6]['sunday'].sidedish[0]['lunch'];
    this.sidedishSelect20= this.nationalCuisine.chartDetails[0]['chart'][6]['sunday'].sidedish[0]['dinner'];

    
    console.log("Siva", this.dishSelect2);
    // console.log("Siva", this.interNationSelect);
    
    // console.log('Total User Details Count:', result);

    // this.all_userdetails = result.chartDetails;
    // this.totalUserCount = this.all_userdetails.length;

    // console.log(this.all_userdetails);internationalCuisine
    this.onClick();
  },
);




  } 

  createTemplate(): void {


    // console.log(this.interNationSelect);
    // console.log(this.NationSelect);
    
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
  // console.log(data);
  
  


  //   this.database.postdata(`ypc-admin-micro-service/edit/template/3`, data).subscribe({
  //     next: (result) => {
  //       // console.log(result);
  //       // this.result = result.message;
  //       // this.succesMsg(this.result);
  //     },
  //     error: (error) => {
  //       // console.log(error);
  //       // this.errorMsg(error.error.error);
  //     },
  //     complete: () => {
  // //  console.log("completed ..........");
   
  //     }
  //   });

  // this.database.getData(`ypc-admin-micro-service/gettemplate/${this.id}`).subscribe(

    this.database.postdata(`ypc-admin-micro-service/edit/template/${this.id}`, data).subscribe({
      next: (result) => {
        console.log(result);
        this.router.navigate(['template_list']);
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
    // console.log(item);
  }
  onSelectAll(items: any) {
    // console.log(items);
  }

  
  onClick() {
 



    if (this.interNationSelect !="" && this.NationSelect !="" && this.foodPreference !="") {
      // const apiUrl = 'ypc-admin-micro-service/admin/template/getProducts/2';
     
      let food = "?nationalCuisine="+this.NationSelect+"&internationalCuisine="+this.interNationSelect+"&productType="+this.foodPreference;
  
     
  
      this.database.getData('ypc-admin-micro-service/admin/template/getProducts/1'+food).subscribe(
        (result: any={}) => 
      {
        
    

        this.mainDishArray11 = result.mainDish; 

        // this.mainDishArray11= [{"name":'dosa'},{"name":'idly'},{"name":'upma'}];
        // console.log("213123434",this.mainDishArray11);

        this.SideDishArray = result.sideDish; 
        // console.log("testing",this.SideDishArray);

   
      }
        );
    } else {
      // console.log('Please select all required values');
      alert('Please select all values');
    }





    
  }


  
  save(arg0: any) {
    throw new Error('Method not implemented.');
    }
  




}
