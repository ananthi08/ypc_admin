import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery'
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
// import {Component, ElementRef, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
// import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
// import {MatChipInputEvent} from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',

})


export class TemplatesComponent implements OnInit {
  result: any;


  // fruitCtrl:FormControl;
  // filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  // @ViewChild('fruitInput')
  // fruitInput!: ElementRef<HTMLInputElement>;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  separatorKeysCodes1: number[] = [ENTER, COMMA];

  errormsg: any;
  id: any = {};
  dishes: any = {};
  mainDishArray11: any = [];
  SideDishArray: any = [];
  otherDishArray: any[] = [];
  mainDishArray: any = {};
  dropdownList = [];
  selectedItems = [];
  internationalCuisine: any = {};
  nationalCuisine: any = {};
  // foodPreference:any="";
  foodPreference: any = "Veg";
  maindish: any = {};
  successmsg: any;
  dishSelect: any = [];
  sidedishSelect: any = [];
  otherdishSelect: any = "";
  interNationSelect: any = "Indian";
  NationSelect: any = "Tamil";
  idCard: any;
  dishSelect1: any = "";
  dishSelect2: any = "";
  dishSelect3: any = "";
  dishSelect4: any = "";
  dishSelect5: any = "";
  dishSelect6: any = "";
  dishSelect7: any = "";
  dishSelect8: any = "";
  dishSelect9: any = "";
  dishSelect10: any = "";
  dishSelect11: any = "";
  dishSelect12: any = "";
  dishSelect13: any = "";
  dishSelect14: any = "";
  dishSelect15: any = "";
  dishSelect16: any = "";
  dishSelect17: any = "";
  dishSelect18: any = "";
  dishSelect19: any = "";
  dishSelect20: any = "";
  sidedishSelect1: any = "";
  sidedishSelect2: any = "";
  sidedishSelect3: any = "";
  sidedishSelect4: any = "";
  sidedishSelect5: any = "";
  sidedishSelect6: any = "";
  sidedishSelect7: any = "";
  sidedishSelect8: any = "";
  sidedishSelect9: any = "";
  sidedishSelect10: any = "";
  sidedishSelect11: any = "";
  sidedishSelect12: any = "";
  sidedishSelect13: any = "";
  sidedishSelect14: any = "";
  sidedishSelect15: any = "";
  sidedishSelect16: any = "";
  sidedishSelect17: any = "";
  sidedishSelect18: any = "";
  sidedishSelect19: any = "";
  sidedishSelect20: any = "";
  otherdishSelect1: any = "";
  otherdishSelect2: any = "";
  otherdishSelect3: any = "";
  otherdishSelect4: any = "";
  otherdishSelect5: any = "";
  otherdishSelect6: any = "";
  otherdishSelect7: any = "";
  otherdishSelect8: any = "";
  otherdishSelect9: any = "";
  otherdishSelect10: any = "";
  otherdishSelect11: any = "";
  otherdishSelect12: any = "";
  otherdishSelect13: any = "";
  otherdishSelect14: any = "";
  otherdishSelect15: any = "";
  otherdishSelect16: any = "";
  otherdishSelect17: any = "";
  otherdishSelect18: any = "";
  otherdishSelect19: any = "";
  otherdishSelect20: any = "";
  // mockSideDishList: any = [];
  mockSideDishList: any = [];
  maxSideDishList: any = [];
  otherDishList: any = [];
  selectedDishList: any = [];
  selectedDishList1: any = [];
  selectedDishList2: any = [];
  selectedDishList3: any = [];
  selectedDishList4: any = [];
  selectedDishList5: any = [];
  selectedDishList6: any = [];
  selectedDishList7: any = [];
  selectedDishList8: any = [];
  selectedDishList9: any = [];
  selectedDishList10: any = [];
  selectedDishList11: any = [];
  selectedDishList12: any = [];
  selectedDishList13: any = [];
  selectedDishList14: any = [];
  selectedDishList15: any = [];
  selectedDishList16: any = [];
  selectedDishList17: any = [];
  selectedDishList18: any = [];
  selectedDishList19: any = [];
  selectedDishList20: any = [];


  selectedSideDishList: any[] = [];
  selectedSideDishList1: any[] = [];
  selectedSideDishList2: any[] = [];
  selectedSideDishList3: any[] = [];
  selectedSideDishList4: any[] = [];
  selectedSideDishList5: any[] = [];
  selectedSideDishList6: any[] = [];
  selectedSideDishList7: any[] = [];
  selectedSideDishList8: any[] = [];
  selectedSideDishList9: any[] = [];
  selectedSideDishList10: any[] = [];
  selectedSideDishList11: any[] = [];
  selectedSideDishList12: any[] = [];
  selectedSideDishList13: any[] = [];
  selectedSideDishList14: any[] = [];
  selectedSideDishList15: any[] = [];
  selectedSideDishList16: any[] = [];
  selectedSideDishList17: any[] = [];
  selectedSideDishList18: any[] = [];
  selectedSideDishList19: any[] = [];
  selectedSideDishList20: any[] = [];
  



    selectedOtherDishList: any[] = [];
  selectedOtherDishList1: any[] = [];
selectedOtherDishList2: any[] = [];
selectedOtherDishList3: any[] = [];
selectedOtherDishList4: any[] = [];
selectedOtherDishList5: any[] = [];
selectedOtherDishList6: any[] = [];
selectedOtherDishList7: any[] = [];
selectedOtherDishList8: any[] = [];
selectedOtherDishList9: any[] = [];
selectedOtherDishList10: any[] = [];
selectedOtherDishList11: any[] = [];
selectedOtherDishList12: any[] = [];
selectedOtherDishList13: any[] = [];
selectedOtherDishList14: any[] = [];
selectedOtherDishList15: any[] = [];
selectedOtherDishList16: any[] = [];
selectedOtherDishList17: any[] = [];
selectedOtherDishList18: any[] = [];
selectedOtherDishList19: any[] = [];
selectedOtherDishList20: any[] = [];







  otherdishCrtl: FormControl;
  otherdishCrtl1: FormControl;
  otherdishCrtl2: FormControl;
  otherdishCrtl3: FormControl;
  otherdishCrtl4: FormControl;
  otherdishCrtl5: FormControl;
  otherdishCrtl6: FormControl;
  otherdishCrtl7: FormControl;
  otherdishCrtl8: FormControl;
  otherdishCrtl9: FormControl;
  otherdishCrtl10: FormControl;
  otherdishCrtl11: FormControl;
  otherdishCrtl12: FormControl;
  otherdishCrtl13: FormControl;
  otherdishCrtl14: FormControl;
  otherdishCrtl15: FormControl;
  otherdishCrtl16: FormControl;
  otherdishCrtl17: FormControl;
  otherdishCrtl18: FormControl;
  otherdishCrtl19: FormControl;
  otherdishCrtl20: FormControl;



  sidedishCrtl: FormControl;
  sidedishCrtl1: FormControl;
  sidedishCrtl2: FormControl;
  sidedishCrtl3: FormControl;
  sidedishCrtl4: FormControl;
  sidedishCrtl5: FormControl;
  sidedishCrtl6: FormControl;
  sidedishCrtl7: FormControl;
  sidedishCrtl8: FormControl;
  sidedishCrtl9: FormControl;
  sidedishCrtl10: FormControl;
  sidedishCrtl11: FormControl;
  sidedishCrtl12: FormControl;
  sidedishCrtl13: FormControl;
  sidedishCrtl14: FormControl;
  sidedishCrtl15: FormControl;
  sidedishCrtl16: FormControl;
  sidedishCrtl17: FormControl;
  sidedishCrtl18: FormControl;
  sidedishCrtl19: FormControl;
  sidedishCrtl20: FormControl;
  sidedishCrtl21: FormControl;
  

  
  dishCrtl: FormControl;
  dishCrtl1: FormControl;
  dishCrtl2: FormControl;
  dishCrtl3: FormControl;
  dishCrtl4: FormControl;
  dishCrtl5: FormControl;
  dishCrtl6: FormControl;
  dishCrtl7: FormControl;
  dishCrtl8: FormControl;
  dishCrtl9: FormControl;
  dishCrtl10: FormControl;
  dishCrtl11: FormControl;
  dishCrtl12: FormControl;
  dishCrtl13: FormControl;
  dishCrtl14: FormControl;
  dishCrtl15: FormControl;
  dishCrtl16: FormControl;
  dishCrtl17: FormControl;
  dishCrtl18: FormControl;
  dishCrtl19: FormControl;
  dishCrtl20: FormControl;


  filterDishList: Observable<any[]>;
  filterDishList1: Observable<any[]>;
  filterDishList2: Observable<any[]>;
  filterDishList3: Observable<any[]>;
  filterDishList4: Observable<any[]>;
  filterDishList5: Observable<any[]>;
  filterDishList6: Observable<any[]>;
  filterDishList7: Observable<any[]>;
  filterDishList8: Observable<any[]>;
  filterDishList9: Observable<any[]>;
  filterDishList10: Observable<any[]>;
  filterDishList11: Observable<any[]>;
  filterDishList12: Observable<any[]>;
  filterDishList13: Observable<any[]>;
  filterDishList14: Observable<any[]>;
  filterDishList15: Observable<any[]>;
  filterDishList16: Observable<any[]>;
  filterDishList17: Observable<any[]>;
  filterDishList18: Observable<any[]>;
  filterDishList19: Observable<any[]>;
  filterDishList20: Observable<any[]>;


  

  otherfilterDishList: Observable<any[]>;
  otherfilterDishList1: Observable<any[]>;
  otherfilterDishList2: Observable<any[]>;
  otherfilterDishList3: Observable<any[]>;
  otherfilterDishList4: Observable<any[]>;
  otherfilterDishList5: Observable<any[]>;
  otherfilterDishList6: Observable<any[]>;
  otherfilterDishList7: Observable<any[]>;
  otherfilterDishList8: Observable<any[]>;
  otherfilterDishList9: Observable<any[]>;
  otherfilterDishList10: Observable<any[]>;
  otherfilterDishList11: Observable<any[]>;
  otherfilterDishList12: Observable<any[]>;
  otherfilterDishList13: Observable<any[]>;
  otherfilterDishList14: Observable<any[]>;
  otherfilterDishList15: Observable<any[]>;
  otherfilterDishList16: Observable<any[]>;
  otherfilterDishList17: Observable<any[]>;
  otherfilterDishList18: Observable<any[]>;
  otherfilterDishList19: Observable<any[]>;
  otherfilterDishList20: Observable<any[]>;




  sidefilterDishList: Observable<any[]>;
sidefilterDishList1: Observable<any[]>;
sidefilterDishList2: Observable<any[]>;
sidefilterDishList3: Observable<any[]>;
sidefilterDishList4: Observable<any[]>;
sidefilterDishList5: Observable<any[]>;
sidefilterDishList6: Observable<any[]>;
sidefilterDishList7: Observable<any[]>;
sidefilterDishList8: Observable<any[]>;
sidefilterDishList9: Observable<any[]>;
sidefilterDishList10: Observable<any[]>;
sidefilterDishList11: Observable<any[]>;
sidefilterDishList12: Observable<any[]>;
sidefilterDishList13: Observable<any[]>;
sidefilterDishList14: Observable<any[]>;
sidefilterDishList15: Observable<any[]>;
sidefilterDishList16: Observable<any[]>;
sidefilterDishList17: Observable<any[]>;
sidefilterDishList18: Observable<any[]>;
sidefilterDishList19: Observable<any[]>;
sidefilterDishList20: Observable<any[]>;
// sidefilterDishList21: Observable<any[]>;



@ViewChild('otherdishInput') otherdishInput!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput1') otherdishInput1!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput2') otherdishInput2!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput3') otherdishInput3!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput4') otherdishInput4!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput5') otherdishInput5!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput6') otherdishInput6!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput7') otherdishInput7!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput8') otherdishInput8!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput9') otherdishInput9!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput10') otherdishInput10!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput11') otherdishInput11!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput12') otherdishInput12!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput13') otherdishInput13!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput14') otherdishInput14!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput15') otherdishInput15!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput16') otherdishInput16!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput17') otherdishInput17!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput18') otherdishInput18!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput19') otherdishInput19!: ElementRef<HTMLInputElement>;
@ViewChild('otherdishInput20') otherdishInput20!: ElementRef<HTMLInputElement>;




  
@ViewChild('sidedishInput') sidedishInput!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput1') sidedishInput1!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput2') sidedishInput2!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput3') sidedishInput3!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput4') sidedishInput4!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput5') sidedishInput5!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput6') sidedishInput6!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput7') sidedishInput7!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput8') sidedishInput8!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput9') sidedishInput9!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput10') sidedishInput10!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput11') sidedishInput11!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput12') sidedishInput12!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput13') sidedishInput13!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput14') sidedishInput14!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput15') sidedishInput15!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput16') sidedishInput16!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput17') sidedishInput17!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput18') sidedishInput18!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput19') sidedishInput19!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput20') sidedishInput20!: ElementRef<HTMLInputElement>;
@ViewChild('sidedishInput21') sidedishInput21!: ElementRef<HTMLInputElement>;



  @ViewChild('dishInput')
  dishInput!: ElementRef<HTMLInputElement>;

  @ViewChild('dishInput1')
  dishInput1!: ElementRef<HTMLInputElement>;

  @ViewChild('dishInput2')
  dishInput2!: ElementRef<HTMLInputElement>;
  @ViewChild('dishInput3')
  dishInput3!: ElementRef<HTMLInputElement>;
  @ViewChild('dishInput4')
  dishInput4!: ElementRef<HTMLInputElement>;
  @ViewChild('dishInput5')
  dishInput5!: ElementRef<HTMLInputElement>;
  @ViewChild('dishInput6')
  dishInput6!: ElementRef<HTMLInputElement>;
  @ViewChild('dishInput7')
  dishInput7!: ElementRef<HTMLInputElement>;
  @ViewChild('dishInput8')
  dishInput8!: ElementRef<HTMLInputElement>;
  @ViewChild('dishInput9')
  dishInput9!: ElementRef<HTMLInputElement>;
  @ViewChild('dishInput10')
  dishInput10!: ElementRef<HTMLInputElement>;
  @ViewChild('dishInput11')
  dishInput11!: ElementRef<HTMLInputElement>;
  @ViewChild('dishInput12')
  dishInput12!: ElementRef<HTMLInputElement>;
  @ViewChild('dishInput13')
  dishInput13!: ElementRef<HTMLInputElement>;
  @ViewChild('dishInput14')
  dishInput14!: ElementRef<HTMLInputElement>;
  @ViewChild('dishInput15')
  dishInput15!: ElementRef<HTMLInputElement>;
  @ViewChild('dishInput16')
  dishInput16!: ElementRef<HTMLInputElement>;
  @ViewChild('dishInput17')
  dishInput17!: ElementRef<HTMLInputElement>;
  @ViewChild('dishInput18')
  dishInput18!: ElementRef<HTMLInputElement>;
  @ViewChild('dishInput19')
  dishInput19!: ElementRef<HTMLInputElement>;
  @ViewChild('dishInput20')
  dishInput20!: ElementRef<HTMLInputElement>;


  constructor(private database: DbService, private router: Router) {


    this.otherdishCrtl=new FormControl("");
this.otherdishCrtl1=new FormControl("");
this.otherdishCrtl2 = new FormControl("");
this.otherdishCrtl3 = new FormControl("");
this.otherdishCrtl4 = new FormControl("");
this.otherdishCrtl5 = new FormControl("");
this.otherdishCrtl6 = new FormControl("");
this.otherdishCrtl7 = new FormControl("");
this.otherdishCrtl8 = new FormControl("");
this.otherdishCrtl9 = new FormControl("");
this.otherdishCrtl10 = new FormControl("");
this.otherdishCrtl11 = new FormControl("");
this.otherdishCrtl12 = new FormControl("");
this.otherdishCrtl13 = new FormControl("");
this.otherdishCrtl14 = new FormControl("");
this.otherdishCrtl15 = new FormControl("");
this.otherdishCrtl16 = new FormControl("");
this.otherdishCrtl17 = new FormControl("");
this.otherdishCrtl18 = new FormControl("");
this.otherdishCrtl19 = new FormControl("");
this.otherdishCrtl20 = new FormControl("");
   
    this.sidedishCrtl = new FormControl("");
    this.sidedishCrtl1 = new FormControl("");
    this.sidedishCrtl2 = new FormControl("");
    this.sidedishCrtl3 = new FormControl("");
    this.sidedishCrtl4 = new FormControl("");
    this.sidedishCrtl5 = new FormControl("");
    this.sidedishCrtl6 = new FormControl("");
    this.sidedishCrtl7 = new FormControl("");
    this.sidedishCrtl8 = new FormControl("");
    this.sidedishCrtl9 = new FormControl("");
    this.sidedishCrtl10 = new FormControl("");
    this.sidedishCrtl11 = new FormControl("");
    this.sidedishCrtl12 = new FormControl("");
    this.sidedishCrtl13 = new FormControl("");
    this.sidedishCrtl14 = new FormControl("");
    this.sidedishCrtl15 = new FormControl("");
    this.sidedishCrtl16 = new FormControl("");
    this.sidedishCrtl17 = new FormControl("");
    this.sidedishCrtl18 = new FormControl("");
    this.sidedishCrtl19 = new FormControl("");
    this.sidedishCrtl20 = new FormControl("");
    this.sidedishCrtl21 = new FormControl("");
    

this.dishCrtl=new FormControl("");
this.dishCrtl1=new FormControl("");
this.dishCrtl2=new FormControl("");
this.dishCrtl3=new FormControl("");
this.dishCrtl4=new FormControl("");
this.dishCrtl5=new FormControl("");
this.dishCrtl6=new FormControl("");
this.dishCrtl7=new FormControl("");
this.dishCrtl8=new FormControl("");
this.dishCrtl9=new FormControl("");
this.dishCrtl10=new FormControl("");
this.dishCrtl11=new FormControl("");
this.dishCrtl12=new FormControl("");
this.dishCrtl13=new FormControl("");
this.dishCrtl14=new FormControl("");
this.dishCrtl15=new FormControl("");
this.dishCrtl16=new FormControl("");
this.dishCrtl17=new FormControl("");
this.dishCrtl18=new FormControl("");
this.dishCrtl19=new FormControl("");
this.dishCrtl20=new FormControl("");



// //console.log(this.mockSideDishList)

    this.filterDishList = this.dishCrtl.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {       
        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    

   



    this.filterDishList1 = this.dishCrtl1.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList2 = this.dishCrtl2.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList3 = this.dishCrtl3.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList4 = this.dishCrtl4.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList5 = this.dishCrtl5.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList6 = this.dishCrtl6.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList7 = this.dishCrtl7.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList8 = this.dishCrtl8.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList9 = this.dishCrtl9.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList10 = this.dishCrtl10.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList11 = this.dishCrtl11.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList12 = this.dishCrtl12.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList13 = this.dishCrtl13.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList14 = this.dishCrtl14.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList15 = this.dishCrtl15.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList16 = this.dishCrtl16.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList17 = this.dishCrtl17.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList18 = this.dishCrtl18.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList19 = this.dishCrtl19.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );
    this.filterDishList20 = this.dishCrtl20.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish)
        //console.log(this.mockSideDishList)

        return (dish ? this._dish(dish) : this.mockSideDishList.slice())
      }),
    );


    this.otherfilterDishList = this.otherdishCrtl.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );



this.otherfilterDishList1 = this.otherdishCrtl1.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {       
        return (dish ? this._otherdish(dish) : this.otherDishList.slice())
      }),
    );


    this.otherfilterDishList2 = this.otherdishCrtl2.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );
    
    this.otherfilterDishList3 = this.otherdishCrtl3.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );
    
    this.otherfilterDishList4 = this.otherdishCrtl4.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );
    
    this.otherfilterDishList5 = this.otherdishCrtl5.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );
    

    this.otherfilterDishList6 = this.otherdishCrtl6.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );
    
    this.otherfilterDishList7 = this.otherdishCrtl7.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );
    
    this.otherfilterDishList8 = this.otherdishCrtl8.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );
    
    this.otherfilterDishList9 = this.otherdishCrtl9.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );
    
    this.otherfilterDishList10 = this.otherdishCrtl10.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );

    
    this.otherfilterDishList11 = this.otherdishCrtl11.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );
    
    this.otherfilterDishList12 = this.otherdishCrtl12.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );
    
    this.otherfilterDishList13 = this.otherdishCrtl13.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );
    
    this.otherfilterDishList14 = this.otherdishCrtl14.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );
    
    this.otherfilterDishList15 = this.otherdishCrtl15.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );

    this.otherfilterDishList16 = this.otherdishCrtl16.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );
    
    this.otherfilterDishList17 = this.otherdishCrtl17.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );
    
    this.otherfilterDishList18 = this.otherdishCrtl18.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );
    
    this.otherfilterDishList19 = this.otherdishCrtl19.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );
    
    this.otherfilterDishList20 = this.otherdishCrtl20.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._otherdish(dish) : this.otherDishList.slice();
      }),
    );













    

    this.sidefilterDishList = this.sidedishCrtl.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    
    this.sidefilterDishList1 = this.sidedishCrtl1.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    
    this.sidefilterDishList2 = this.sidedishCrtl2.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {      
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    
    this.sidefilterDishList3 = this.sidedishCrtl3.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish);
        //console.log(this.maxSideDishList);
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    
    this.sidefilterDishList4 = this.sidedishCrtl4.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish);
        //console.log(this.maxSideDishList);
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );



    this.sidefilterDishList5 = this.sidedishCrtl4.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );

    this.sidefilterDishList6 = this.sidedishCrtl6.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish);
        //console.log(this.maxSideDishList);
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    
    this.sidefilterDishList7 = this.sidedishCrtl7.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish);
        //console.log(this.maxSideDishList);
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    
    this.sidefilterDishList8 = this.sidedishCrtl8.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish);
        //console.log(this.maxSideDishList);
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    
    this.sidefilterDishList9 = this.sidedishCrtl9.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish);
        //console.log(this.maxSideDishList);
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    
    this.sidefilterDishList10 = this.sidedishCrtl10.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish);
        //console.log(this.maxSideDishList);
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );

    

    this.sidefilterDishList11 = this.sidedishCrtl11.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish);
        //console.log(this.maxSideDishList);
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    
    this.sidefilterDishList12 = this.sidedishCrtl12.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish);
        //console.log(this.maxSideDishList);
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    
    this.sidefilterDishList13 = this.sidedishCrtl13.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish);
        //console.log(this.maxSideDishList);
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    
    this.sidefilterDishList14 = this.sidedishCrtl14.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish);
        //console.log(this.maxSideDishList);
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    
    this.sidefilterDishList15 = this.sidedishCrtl15.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish);
        //console.log(this.maxSideDishList);
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    this.sidefilterDishList15 = this.sidedishCrtl15.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish);
        //console.log(this.maxSideDishList);
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    
    this.sidefilterDishList16 = this.sidedishCrtl16.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish);
        //console.log(this.maxSideDishList);
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    
    this.sidefilterDishList17 = this.sidedishCrtl17.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish);
        //console.log(this.maxSideDishList);
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    
    this.sidefilterDishList18 = this.sidedishCrtl18.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish);
        //console.log(this.maxSideDishList);
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    
    this.sidefilterDishList19 = this.sidedishCrtl19.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish);
        //console.log(this.maxSideDishList);
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    
    this.sidefilterDishList20 = this.sidedishCrtl20.valueChanges.pipe(
      startWith(null),
      map((dish: any | null) => {
        //console.log(dish);
        //console.log(this.maxSideDishList);
        return dish ? this._sidedish(dish) : this.maxSideDishList.slice();
      }),
    );
    

    // //console.log(this.filterDishList)
  }

  ngOnInit() {

    if (localStorage.getItem("id")) {
      this.id = JSON.parse(localStorage.getItem("id") || '{}');
      //console.log('admin_id', this.id);

    }
    this.GetInfo();

  }




  GetInfo() {



    // Assuming 'this.database.getData' returns an observable
    this.database.getData('ypc-admin-micro-service/admin/international/cuisine').subscribe(
      (result: any[]) => {

        this.internationalCuisine = result.map(item => item.cuisine);


        //console.log(this.internationalCuisine);
      },
    );


    this.database.getData('ypc-admin-micro-service/admin/national/cuisine').subscribe(
      (result: any[]) => {

        this.nationalCuisine = result.map(item => item.cuisine);


        //console.log(this.nationalCuisine);
      },
    );


  }

  createTemplate(): void {


    // if (this.dishSelect != "" && this.dishSelect1 != "" && this.dishSelect2 != "" && this.dishSelect3 != "" && this.dishSelect4 != "" && this.dishSelect5 != "" && this.dishSelect6 != "" && this.dishSelect7 != "" && this.dishSelect8 != "" && this.dishSelect9 != "" && this.dishSelect10 != "" && this.dishSelect11 != "" && this.dishSelect12 != "" && this.dishSelect13 != "" && this.dishSelect14 != "" && this.dishSelect15 != "" && this.dishSelect16 != "" && this.dishSelect17 != "" && this.dishSelect18 != "" && this.dishSelect19 != "" && this.dishSelect20 != ""
    //   && this.sidedishSelect != "" && this.sidedishSelect1 != "" && this.sidedishSelect2 != "" && this.sidedishSelect3 != "" && this.sidedishSelect4 != "" && this.sidedishSelect5 != "" && this.sidedishSelect6 != "" && this.sidedishSelect7 != "" && this.sidedishSelect8 != "" && this.sidedishSelect9 != "" && this.sidedishSelect10 != "" && this.sidedishSelect11 != "" && this.sidedishSelect12 != "" && this.sidedishSelect13 != "" && this.sidedishSelect14 != "" && this.sidedishSelect15 != "" && this.sidedishSelect16 != "" && this.sidedishSelect17 != "" && this.sidedishSelect18 != "" && this.sidedishSelect19 != "" && this.sidedishSelect20 != ""
    // ) {
    if (this.interNationSelect != "" && this.NationSelect != "" && this.foodPreference != "") {

      const data = {

        adminId: this.id,
        internationalCuisine: [this.interNationSelect],
        nationalCuisine: [this.NationSelect],
        foodPreference: this.foodPreference,
        chart:
          [
            {
              "monday": {
                "maindish": [
                  { "breakfast": this.selectedDishList, "lunch": this.selectedDishList2, "dinner": this.selectedDishList2 }
                ],
                "sidedish": [
                  { "breakfast": this.selectedSideDishList, "lunch": this.selectedSideDishList1, "dinner": this.selectedSideDishList2 }
                ],
                "otherDish": [
                  { "breakfast": this.selectedOtherDishList, "lunch": this.selectedOtherDishList1, "dinner": this.selectedOtherDishList2 }
                ]
              },


            },
            {
              "tuesday": {
                "maindish": [
                  { "breakfast": this.selectedDishList3, "lunch": this.selectedDishList4, "dinner": this.selectedDishList5 }
                ],
                "sidedish": [
                  { "breakfast": this.selectedSideDishList3, "lunch": this.selectedSideDishList4, "dinner": this.selectedSideDishList5 }
                ],
                "otherDish": [
                  { "breakfast": this.selectedOtherDishList3, "lunch": this.selectedOtherDishList4, "dinner": this.selectedOtherDishList5 }
                ]
              },


            },
            {
              "wednesday": {
                "maindish": [
                  { "breakfast": this.selectedDishList6, "lunch": this.selectedDishList7, "dinner": this.selectedDishList8 }
                ],
                "sidedish": [
                  { "breakfast": this.selectedSideDishList6, "lunch": this.selectedSideDishList7, "dinner": this.selectedSideDishList8 }
                ],
                "otherDish": [
                  { "breakfast": this.selectedOtherDishList6, "lunch": this.selectedOtherDishList7, "dinner": this.selectedOtherDishList8 }
                ]
              },


            },
            {
              "thursday": {
                "maindish": [
                  { "breakfast": this.selectedDishList9, "lunch": this.selectedDishList10, "dinner": this.selectedDishList11 }
                ],
                "sidedish": [
                  { "breakfast": this.selectedSideDishList9, "lunch": this.selectedSideDishList10, "dinner": this.selectedSideDishList11 }
                ],
                "otherDish": [
                  { "breakfast": this.selectedOtherDishList9, "lunch": this.selectedOtherDishList10, "dinner": this.selectedOtherDishList11 }
                ]
              },


            },
            {
              "friday": {
                "maindish": [
                  { "breakfast": this.selectedDishList12, "lunch": this.selectedDishList13, "dinner": this.selectedDishList14 }
                ],
                "sidedish": [
                  { "breakfast": this.selectedSideDishList12, "lunch": this.selectedSideDishList13, "dinner": this.selectedSideDishList14 }
                ],
                "otherDish": [
                  { "breakfast": this.selectedOtherDishList12, "lunch": this.selectedOtherDishList13, "dinner": this.selectedOtherDishList14 }
                ]
              },


            },
            {
              "saturday": {
                "maindish": [
                  { "breakfast": this.selectedDishList15, "lunch": this.selectedDishList16, "dinner": this.selectedDishList17 }
                ],
                "sidedish": [
                  { "breakfast": this.selectedSideDishList15, "lunch": this.selectedSideDishList16, "dinner": this.selectedSideDishList17 }
                ],
                "otherDish": [
                  { "breakfast": this.selectedOtherDishList15, "lunch": this.selectedOtherDishList16, "dinner": this.selectedOtherDishList17 }
                ]

              },


            },
            {
              "sunday": {
                "maindish": [
                  { "breakfast": this.selectedDishList18, "lunch": this.selectedDishList19, "dinner": this.selectedDishList20 }
                ],
                "sidedish": [
                  { "breakfast": this.selectedSideDishList18, "lunch": this.selectedSideDishList19, "dinner": this.selectedSideDishList20 }
                ],
                "otherDish": [
                  { "breakfast": this.selectedOtherDishList18, "lunch": this.selectedOtherDishList19, "dinner": this.selectedOtherDishList20 }
                ]

              },


            }


          ]

      };
      //console.log(data);

      this.database.postdata(`ypc-admin-micro-service/admin/template/${this.id}`, data).subscribe({
        next: (result) => {
          //console.log(result);
          this.result = result.data;
          this.succesMsg(result.message);
          this.router.navigate(['template_list']);

        },
        error: (error) => {
        },
        complete: () => {
          //console.log("completed ..........");

        }
      });
    }
    else {
      // //console.log('Please select all required values');
      alert('Please select all values');
    }



  }


  onItemSelect(item: any) {
    //console.log(item);
  }
  onSelectAll(items: any) {
    //console.log(items);
  }


  onClick(form: NgForm) {




    if (this.interNationSelect != "" && this.NationSelect != "" && this.foodPreference != "") {
      let food = "?nationalCuisine=" + this.NationSelect + "&internationalCuisine=" + this.interNationSelect + "&productType=" + this.foodPreference;

      this.database.getData(`ypc-admin-micro-service/admin/template/getProducts/${this.id}` + food).subscribe(
        (result: any = {}) => {
          this.mainDishArray11 = result.mainDish;

          // this.mainDishArray11= [{"name":'dosa'},{"name":'idly'},{"name":'upma'}];
          // //console.log("testing", this.mainDishArray11);

          this.SideDishArray = result.sideDish;
          // //console.log("testing", this.SideDishArray);


          this.otherDishArray = result.otherDish;
          // //console.log("testing", this.otherDishArray);

          this.mockSideDishList=this.mainDishArray11.map((dish:any)=>dish.name)
          //console.log(this.mockSideDishList);
          
          this.maxSideDishList=this.SideDishArray.map((dish:any)=>dish.name)
          //console.log(this.maxSideDishList);

          this.otherDishList=this.otherDishArray.map((dish:any)=>dish.name)

          // this.otherDishList=this.SideDishArray.map((dish:any)=>dish.name)
          
      this.dishCrtl.reset();
      this.dishCrtl1.reset();
      this.dishCrtl2.reset();
      this.dishCrtl3.reset();
      this.dishCrtl4.reset();
      this.dishCrtl5.reset();
      this.dishCrtl6.reset();
      this.dishCrtl7.reset();
      this.dishCrtl8.reset();
      this.dishCrtl9.reset();
      this.dishCrtl10.reset();
      this.dishCrtl11.reset();
      this.dishCrtl12.reset();
      this.dishCrtl13.reset();
      this.dishCrtl14.reset();
      this.dishCrtl15.reset();
      this.dishCrtl16.reset();
      this.dishCrtl17.reset();
      this.dishCrtl18.reset();
      this.dishCrtl19.reset();
      this.dishCrtl20.reset();
      
      this.sidedishCrtl.reset();
      this.sidedishCrtl1.reset();
      this.sidedishCrtl2.reset();
      this.sidedishCrtl3.reset();
      this.sidedishCrtl4.reset();
      this.sidedishCrtl5.reset();
      this.sidedishCrtl6.reset();
      this.sidedishCrtl7.reset();
      this.sidedishCrtl8.reset();
      this.sidedishCrtl9.reset();
      this.sidedishCrtl10.reset();
      this.sidedishCrtl11.reset();
      this.sidedishCrtl12.reset();
      this.sidedishCrtl13.reset();
      this.sidedishCrtl14.reset();
      this.sidedishCrtl15.reset();
      this.sidedishCrtl16.reset();
      this.sidedishCrtl17.reset();
      this.sidedishCrtl18.reset();
      this.sidedishCrtl19.reset();
      this.sidedishCrtl20.reset();
      
      this.otherdishCrtl.reset();
      this.otherdishCrtl1.reset();
      this.otherdishCrtl2.reset();
      this.otherdishCrtl3.reset();
      this.otherdishCrtl4.reset();
      this.otherdishCrtl5.reset();
      this.otherdishCrtl6.reset();
      this.otherdishCrtl7.reset();
      this.otherdishCrtl8.reset();
      this.otherdishCrtl9.reset();
      this.otherdishCrtl10.reset();
      this.otherdishCrtl11.reset();
      this.otherdishCrtl12.reset();
      this.otherdishCrtl13.reset();
      this.otherdishCrtl14.reset();
      this.otherdishCrtl15.reset();
      this.otherdishCrtl16.reset();
      this.otherdishCrtl17.reset();
      this.otherdishCrtl18.reset();
      this.otherdishCrtl19.reset();
      this.otherdishCrtl20.reset();
      


      


// //console.log(this.mockSideDishList)
// //console.log(this.filterDishList)


          //  alert('Templated created')
        }
      );
    } else {
      // //console.log('Please select all required values');
      alert('Please select all values');
    }
  }
  save(arg0: any) {
    throw new Error('Method not implemented.');
  }

  succesMsg(msg: any) {
    this.successmsg = msg;
    $('#collapseExample1').show();
    setTimeout(() => {
      $('#collapseExample1').hide();
    }, 3000);

  }
  errorMsg(msg: any) {

    this.errormsg = msg;
    $('#collapseExample').show();
    setTimeout(() => {
      $('#collapseExample').hide();
    }, 3000);
  }


  otheradd(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl.setValue(null);
  }


  otheradd1(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList1.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl1.setValue(null);
  }


  otheradd2(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList2.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl2.setValue(null);
  }
  
  otheradd3(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList3.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl3.setValue(null);
  }
  
  otheradd4(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList4.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl4.setValue(null);
  }
  
  otheradd5(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList5.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl5.setValue(null);
  }

  


  otheradd6(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList6.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl6.setValue(null);
  }
  
  otheradd7(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList7.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl7.setValue(null);
  }
  
  otheradd8(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList8.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl8.setValue(null);
  }
  
  otheradd9(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList9.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl9.setValue(null);
  }
  
  otheradd10(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList10.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl10.setValue(null);
  }

  

  otheradd11(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList11.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl11.setValue(null);
  }
  
  otheradd12(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList12.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl12.setValue(null);
  }
  
  otheradd13(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList13.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl13.setValue(null);
  }
  
  otheradd14(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList14.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl14.setValue(null);
  }
  
  otheradd15(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList15.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl15.setValue(null);
  }

  
  otheradd16(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList16.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl16.setValue(null);
  }
  
  otheradd17(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList17.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl17.setValue(null);
  }
  
  otheradd18(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList18.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl18.setValue(null);
  }
  
  otheradd19(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList19.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl19.setValue(null);
  }
  
  otheradd20(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedOtherDishList20.push(value);     
    }
    event.chipInput!.clear();
    this.otherdishCrtl20.setValue(null);
  }

  


  sideadd(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedSideDishList.push(value);     
    }
    event.chipInput!.clear();
    this.sidedishCrtl.setValue(null);
  }


  sideadd1(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedSideDishList1.push(value);     
    }
    event.chipInput!.clear();
    this.sidedishCrtl1.setValue(null);
  }

  sideadd2(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList2.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl2.setValue(null);
  }
  
  sideadd3(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList3.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl3.setValue(null);
  }
  
  sideadd4(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList4.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl4.setValue(null);
  }
  
  sideadd5(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList5.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl5.setValue(null);
  }

  sideadd6(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList6.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl6.setValue(null);
  }
  
  sideadd7(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList7.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl7.setValue(null);
  }
  
  sideadd8(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList8.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl8.setValue(null);
  }
  
  sideadd9(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList9.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl9.setValue(null);
  }
  
  sideadd10(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList10.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl10.setValue(null);
  }

  
  sideadd11(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList11.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl11.setValue(null);
  }
  
  sideadd12(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList12.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl12.setValue(null);
  }
  
  sideadd13(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList13.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl13.setValue(null);
  }
  
  sideadd14(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList14.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl14.setValue(null);
  }
  
  sideadd15(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList15.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl15.setValue(null);
  }
  sideadd16(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList16.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl16.setValue(null);
  }
  
  sideadd17(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList17.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl17.setValue(null);
  }
  
  sideadd18(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList18.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl18.setValue(null);
  }
  
  sideadd19(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList19.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl19.setValue(null);
  }
  
  sideadd20(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSideDishList20.push(value);
    }
    event.chipInput!.clear();
    this.sidedishCrtl20.setValue(null);
  }
    


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl.setValue(null);
  }

   add1(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedDishList1.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.dishCrtl1.setValue(null);
  }

  add2(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList2.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl2.setValue(null);
  }


  add3(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList3.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl3.setValue(null);
  }

  add4(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList4.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl4.setValue(null);
  }

  add5(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList5.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl5.setValue(null);
  }


  add6(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList6.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl6.setValue(null);
  }

  add7(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList7.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl7.setValue(null);
  }

  add8(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList8.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl8.setValue(null);
  }

  add9(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList9.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl9.setValue(null);
  }

  add10(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList10.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl10.setValue(null);
  }

  add11(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList11.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl11.setValue(null);
  }

  add12(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList12.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl12.setValue(null);
  }

  add13(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList13.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl13.setValue(null);
  }

  add14(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList14.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl14.setValue(null);
  }

  add15(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList15.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl15.setValue(null);
  }
  add16(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList16.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl16.setValue(null);
  }
  add17(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList17.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl17.setValue(null);
  }
  add18(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList18.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl18.setValue(null);
  }
  add19(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList19.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl19.setValue(null);
  }
  add20(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();  
    if (value) {
      this.selectedDishList20.push(value);     
    }
    // Clear the input value
    event.chipInput!.clear();
    this.dishCrtl20.setValue(null);
  }


  //   add1(event: MatChipInputEvent): void {
  //     const value = (event.value || '').trim();
  // //console.log(value);
  // //console.log(event.value);

  //     // Add our fruit
  //     if (value) {
  //       this.sidedishSelect.push(value);
  //       //console.log('er',this.dishSelect);

  //     }

  //     // Clear the input value
  //     event.chipInput!.clear();

  //     this.fruitCtrl.setValue(null);
  //   }


  otherremove(dish: any): void {
    const index = this.selectedOtherDishList.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList.splice(index, 1);
    }
  }


  otherremove1(dish: any): void {
    const index = this.selectedOtherDishList1.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList1.splice(index, 1);
    }
  }


  otherremove2(dish: any): void {
    const index = this.selectedOtherDishList2.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList2.splice(index, 1);
    }
  }
  
  otherremove3(dish: any): void {
    const index = this.selectedOtherDishList3.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList3.splice(index, 1);
    }
  }
  
  otherremove4(dish: any): void {
    const index = this.selectedOtherDishList4.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList4.splice(index, 1);
    }
  }

  
  otherremove5(dish: any): void {
    const index = this.selectedOtherDishList5.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList5.splice(index, 1);
    }
  }

  
  otherremove6(dish: any): void {
    const index = this.selectedOtherDishList6.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList6.splice(index, 1);
    }
  }
  
  otherremove7(dish: any): void {
    const index = this.selectedOtherDishList7.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList7.splice(index, 1);
    }
  }
  
  otherremove8(dish: any): void {
    const index = this.selectedOtherDishList8.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList8.splice(index, 1);
    }
  }
  
  otherremove9(dish: any): void {
    const index = this.selectedOtherDishList9.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList9.splice(index, 1);
    }
  }
  
  otherremove10(dish: any): void {
    const index = this.selectedOtherDishList10.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList10.splice(index, 1);
    }
  }

  otherremove11(dish: any): void {
    const index = this.selectedOtherDishList11.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList11.splice(index, 1);
    }
  }
  
  otherremove12(dish: any): void {
    const index = this.selectedOtherDishList12.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList12.splice(index, 1);
    }
  }
  
  otherremove13(dish: any): void {
    const index = this.selectedOtherDishList13.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList13.splice(index, 1);
    }
  }
  
  otherremove14(dish: any): void {
    const index = this.selectedOtherDishList14.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList14.splice(index, 1);
    }
  }
  
  otherremove15(dish: any): void {
    const index = this.selectedOtherDishList15.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList15.splice(index, 1);
    }
  }

  otherremove16(dish: any): void {
    const index = this.selectedOtherDishList16.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList16.splice(index, 1);
    }
  }
  
  otherremove17(dish: any): void {
    const index = this.selectedOtherDishList17.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList17.splice(index, 1);
    }
  }
  
  otherremove18(dish: any): void {
    const index = this.selectedOtherDishList18.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList18.splice(index, 1);
    }
  }
  
  otherremove19(dish: any): void {
    const index = this.selectedOtherDishList19.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList19.splice(index, 1);
    }
  }
  
  otherremove20(dish: any): void {
    const index = this.selectedOtherDishList20.indexOf(dish);
  
    if (index >= 0) {
      this.selectedOtherDishList20.splice(index, 1);
    }
  }
  



  sideremove(dish: any): void {
    const index = this.selectedSideDishList.indexOf(dish);
  
    if (index >= 0) {
      this.selectedSideDishList.splice(index, 1);
    }
  }
  
  sideremove1(dish: any): void {
    const index = this.selectedSideDishList1.indexOf(dish);
  
    if (index >= 0) {
      this.selectedSideDishList1.splice(index, 1);
    }
  }
  
  sideremove2(dish: any): void {
    const index = this.selectedSideDishList2.indexOf(dish);
  
    if (index >= 0) {
      this.selectedSideDishList2.splice(index, 1);
    }
  }
  

  sideremove3(dish: any): void {
    const index = this.selectedSideDishList3.indexOf(dish);
  
    if (index >= 0) {
      this.selectedSideDishList4.splice(index, 1);
    }
  }
  

  sideremove4(dish: any): void {
    const index = this.selectedSideDishList4.indexOf(dish);
  
    if (index >= 0) {
      this.selectedSideDishList4.splice(index, 1);
    }
  }


  sideremove5(dish: any): void {
    const index = this.selectedSideDishList5.indexOf(dish);
  
    if (index >= 0) {
      this.selectedSideDishList5.splice(index, 1);
    }
  }
  
  sideremove6(dish: any): void {
    const index = this.selectedSideDishList6.indexOf(dish);
  
    if (index >= 0) {
      this.selectedSideDishList6.splice(index, 1);
    }
  }
  
  sideremove7(dish: any): void {
    const index = this.selectedSideDishList7.indexOf(dish);
  
    if (index >= 0) {
      this.selectedSideDishList7.splice(index, 1);
    }
  }
  
  sideremove8(dish: any): void {
    const index = this.selectedSideDishList8.indexOf(dish);
  
    if (index >= 0) {
      this.selectedSideDishList8.splice(index, 1);
    }
  }


  sideremove9(dish: any): void {
    const index = this.selectedSideDishList9.indexOf(dish);
  
    if (index >= 0) {
      this.selectedSideDishList9.splice(index, 1);
    }
  }
  
  sideremove10(dish: any): void {
    const index = this.selectedSideDishList10.indexOf(dish);
  
    if (index >= 0) {
      this.selectedSideDishList10.splice(index, 1);
    }
  }
  
  sideremove11(dish: any): void {
    const index = this.selectedSideDishList11.indexOf(dish);
  
    if (index >= 0) {
      this.selectedSideDishList11.splice(index, 1);
    }
  }
  
  sideremove12(dish: any): void {
    const index = this.selectedSideDishList12.indexOf(dish);
  
    if (index >= 0) {
      this.selectedSideDishList12.splice(index, 1);
    }
  }
  
  sideremove13(dish: any): void {
    const index = this.selectedSideDishList13.indexOf(dish);
  
    if (index >= 0) {
      this.selectedSideDishList13.splice(index, 1);
    }
  }
  
  sideremove14(dish: any): void {
    const index = this.selectedSideDishList14.indexOf(dish);
  
    if (index >= 0) {
      this.selectedSideDishList14.splice(index, 1);
   
    }
      
    }
  

    // sideremove14(dish: any): void {
    //   const index = this.selectedSideDishList14.indexOf(dish);
    
    //   if (index >= 0) {
    //     this.selectedSideDishList14.splice(index, 1);
    //   }
    // }
    
    sideremove15(dish: any): void {
      const index = this.selectedSideDishList15.indexOf(dish);
    
      if (index >= 0) {
        this.selectedSideDishList15.splice(index, 1);
      }
    }
    
    sideremove16(dish: any): void {
      const index = this.selectedSideDishList16.indexOf(dish);
    
      if (index >= 0) {
        this.selectedSideDishList16.splice(index, 1);
      }
    }
    
    sideremove17(dish: any): void {
      const index = this.selectedSideDishList17.indexOf(dish);
    
      if (index >= 0) {
        this.selectedSideDishList17.splice(index, 1);
      }
    }
    
    sideremove18(dish: any): void {
      const index = this.selectedSideDishList18.indexOf(dish);
    
      if (index >= 0) {
        this.selectedSideDishList18.splice(index, 1);
      }
    }
    
    sideremove19(dish: any): void {
      const index = this.selectedSideDishList19.indexOf(dish);
    
      if (index >= 0) {
        this.selectedSideDishList19.splice(index, 1);
      }
    }
    
    sideremove20(dish: any): void {
      const index = this.selectedSideDishList20.indexOf(dish);
    
      if (index >= 0) {
        this.selectedSideDishList20.splice(index, 1);
      }
    }
    
    // sideremove21(dish: any): void {
    //   const index = this.selectedSideDishList21.indexOf(dish);
    
    //   if (index >= 0) {
    //     this.selectedSideDishList21.splice(index, 1);
    //   }
    // }

    





  remove(dish: any): void {
    //console.log(this.filterDishList)

    //console.log(dish);
    const index = this.selectedDishList.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList.splice(index, 1);
    }
  }


  remove1(dish: any): void {
    //console.log(this.filterDishList1)

    //console.log(dish);
    const index = this.selectedDishList1.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList1.splice(index, 1);
    }
  }


  remove2(dish: any): void {
    const index = this.selectedDishList2.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList2.splice(index, 1);
    }
  }
  remove3(dish: any): void {
    const index = this.selectedDishList3.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList3.splice(index, 1);
    }
  }
  remove4(dish: any): void {
    const index = this.selectedDishList4.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList4.splice(index, 1);
    }
  }
  remove5(dish: any): void {
    const index = this.selectedDishList5.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList5.splice(index, 1);
    }
  }
  remove6(dish: any): void {
    const index = this.selectedDishList6.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList6.splice(index, 1);
    }
  }
  remove7(dish: any): void {
    const index = this.selectedDishList7.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList7.splice(index, 1);
    }
  }
  remove8(dish: any): void {
    const index = this.selectedDishList8.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList8.splice(index, 1);
    }
  }
  remove9(dish: any): void {
    const index = this.selectedDishList9.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList9.splice(index, 1);
    }
  }
  remove10(dish: any): void {
    const index = this.selectedDishList10.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList10.splice(index, 1);
    }
  }
  remove11(dish: any): void {
    const index = this.selectedDishList11.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList11.splice(index, 1);
    }
  }
  remove12(dish: any): void {
    const index = this.selectedDishList12.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList12.splice(index, 1);
    }
  }
  remove13(dish: any): void {
    const index = this.selectedDishList13.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList13.splice(index, 1);
    }
  }
  remove14(dish: any): void {
    const index = this.selectedDishList14.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList14.splice(index, 1);
    }
  }
  remove15(dish: any): void {
    const index = this.selectedDishList15.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList15.splice(index, 1);
    }
  }
  remove16(dish: any): void {
    //console.log(this.filterDishList16)

    //console.log(dish);
    const index = this.selectedDishList16.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList16.splice(index, 1);
    }
  }
  remove17(dish: any): void {
    const index = this.selectedDishList17.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList17.splice(index, 1);
    }
  }
  remove18(dish: any): void {
    const index = this.selectedDishList18.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList18.splice(index, 1);
    }
  }
  remove19(dish: any): void {
    const index = this.selectedDishList19.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList19.splice(index, 1);
    }
  }
  remove20(dish: any): void {
    const index = this.selectedDishList20.indexOf(dish);

    if (index >= 0) {
      this.selectedDishList20.splice(index, 1);
    }
  }



  otherselected(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList.push(event.option.viewValue);
    this.otherdishInput.nativeElement.value = '';
    this.otherdishCrtl.setValue(null);
  }


  otherselected1(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList1.push(event.option.viewValue);
    this.otherdishInput1.nativeElement.value = '';
    this.otherdishCrtl1.setValue(null);
  }


  otherselected2(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList2.push(event.option.viewValue);
    this.otherdishInput2.nativeElement.value = '';
    this.otherdishCrtl2.setValue(null);
  }
  
  otherselected3(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList3.push(event.option.viewValue);
    this.otherdishInput3.nativeElement.value = '';
    this.otherdishCrtl3.setValue(null);
  }
  
  otherselected4(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList4.push(event.option.viewValue);
    this.otherdishInput4.nativeElement.value = '';
    this.otherdishCrtl4.setValue(null);
  }
  
  otherselected5(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList5.push(event.option.viewValue);
    this.otherdishInput5.nativeElement.value = '';
    this.otherdishCrtl5.setValue(null);
  }

  
  otherselected6(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList6.push(event.option.viewValue);
    this.otherdishInput6.nativeElement.value = '';
    this.otherdishCrtl6.setValue(null);
  }
  
  otherselected7(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList7.push(event.option.viewValue);
    this.otherdishInput7.nativeElement.value = '';
    this.otherdishCrtl7.setValue(null);
  }
  
  otherselected8(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList8.push(event.option.viewValue);
    this.otherdishInput8.nativeElement.value = '';
    this.otherdishCrtl8.setValue(null);
  }
  
  otherselected9(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList9.push(event.option.viewValue);
    this.otherdishInput9.nativeElement.value = '';
    this.otherdishCrtl9.setValue(null);
  }
  
  otherselected10(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList10.push(event.option.viewValue);
    this.otherdishInput10.nativeElement.value = '';
    this.otherdishCrtl10.setValue(null);
  }


  otherselected11(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList11.push(event.option.viewValue);
    this.otherdishInput11.nativeElement.value = '';
    this.otherdishCrtl11.setValue(null);
  }
  
  otherselected12(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList12.push(event.option.viewValue);
    this.otherdishInput12.nativeElement.value = '';
    this.otherdishCrtl12.setValue(null);
  }
  
  otherselected13(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList13.push(event.option.viewValue);
    this.otherdishInput13.nativeElement.value = '';
    this.otherdishCrtl13.setValue(null);
  }
  
  otherselected14(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList14.push(event.option.viewValue);
    this.otherdishInput14.nativeElement.value = '';
    this.otherdishCrtl14.setValue(null);
  }
  
  otherselected15(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList15.push(event.option.viewValue);
    this.otherdishInput15.nativeElement.value = '';
    this.otherdishCrtl15.setValue(null);
  }


  otherselected16(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList16.push(event.option.viewValue);
    this.otherdishInput16.nativeElement.value = '';
    this.otherdishCrtl16.setValue(null);
  }
  
  otherselected17(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList17.push(event.option.viewValue);
    this.otherdishInput17.nativeElement.value = '';
    this.otherdishCrtl17.setValue(null);
  }
  
  otherselected18(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList18.push(event.option.viewValue);
    this.otherdishInput18.nativeElement.value = '';
    this.otherdishCrtl18.setValue(null);
  }
  
  otherselected19(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList19.push(event.option.viewValue);
    this.otherdishInput19.nativeElement.value = '';
    this.otherdishCrtl19.setValue(null);
  }
  
  otherselected20(event: MatAutocompleteSelectedEvent): void {
    this.selectedOtherDishList20.push(event.option.viewValue);
    this.otherdishInput20.nativeElement.value = '';
    this.otherdishCrtl20.setValue(null);
  }
  
  


  sideselected(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList.push(event.option.viewValue);
    this.sidedishInput.nativeElement.value = '';
    this.sidedishCrtl.setValue(null);
  }


  sideselected1(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList1.push(event.option.viewValue);
    this.sidedishInput1.nativeElement.value = '';
    this.sidedishCrtl1.setValue(null);
  }



  sideselected2(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList2.push(event.option.viewValue);
    this.sidedishInput2.nativeElement.value = '';
    this.sidedishCrtl2.setValue(null);
  }
  
  sideselected3(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList3.push(event.option.viewValue);
    this.sidedishInput3.nativeElement.value = '';
    this.sidedishCrtl3.setValue(null);
  }
  
  sideselected4(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList4.push(event.option.viewValue);
    this.sidedishInput4.nativeElement.value = '';
    this.sidedishCrtl4.setValue(null);
  }
  
  sideselected5(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList5.push(event.option.viewValue);
    this.sidedishInput5.nativeElement.value = '';
    this.sidedishCrtl5.setValue(null);
  }

  
  sideselected6(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList6.push(event.option.viewValue);
    this.sidedishInput6.nativeElement.value = '';
    this.sidedishCrtl6.setValue(null);
  }
  
  sideselected7(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList7.push(event.option.viewValue);
    this.sidedishInput7.nativeElement.value = '';
    this.sidedishCrtl7.setValue(null);
  }
  
  sideselected8(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList8.push(event.option.viewValue);
    this.sidedishInput8.nativeElement.value = '';
    this.sidedishCrtl8.setValue(null);
  }
  
  sideselected9(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList9.push(event.option.viewValue);
    this.sidedishInput9.nativeElement.value = '';
    this.sidedishCrtl9.setValue(null);
  }
  
  sideselected10(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList10.push(event.option.viewValue);
    this.sidedishInput10.nativeElement.value = '';
    this.sidedishCrtl10.setValue(null);
  }

  
  sideselected11(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList11.push(event.option.viewValue);
    this.sidedishInput11.nativeElement.value = '';
    this.sidedishCrtl11.setValue(null);
  }
  
  sideselected12(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList12.push(event.option.viewValue);
    this.sidedishInput12.nativeElement.value = '';
    this.sidedishCrtl12.setValue(null);
  }
  
  sideselected13(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList13.push(event.option.viewValue);
    this.sidedishInput13.nativeElement.value = '';
    this.sidedishCrtl13.setValue(null);
  }
  
  sideselected14(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList14.push(event.option.viewValue);
    this.sidedishInput14.nativeElement.value = '';
    this.sidedishCrtl14.setValue(null);
  }
  
  sideselected15(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList15.push(event.option.viewValue);
    this.sidedishInput15.nativeElement.value = '';
    this.sidedishCrtl15.setValue(null);
  }

  
  sideselected16(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList16.push(event.option.viewValue);
    this.sidedishInput16.nativeElement.value = '';
    this.sidedishCrtl16.setValue(null);
  }
  
  sideselected17(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList17.push(event.option.viewValue);
    this.sidedishInput17.nativeElement.value = '';
    this.sidedishCrtl17.setValue(null);
  }
  
  sideselected18(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList18.push(event.option.viewValue);
    this.sidedishInput18.nativeElement.value = '';
    this.sidedishCrtl18.setValue(null);
  }
  
  sideselected19(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList19.push(event.option.viewValue);
    this.sidedishInput19.nativeElement.value = '';
    this.sidedishCrtl19.setValue(null);
  }
  
  sideselected20(event: MatAutocompleteSelectedEvent): void {
    this.selectedSideDishList20.push(event.option.viewValue);
    this.sidedishInput20.nativeElement.value = '';
    this.sidedishCrtl20.setValue(null);
  }

  

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList.push(event.option.viewValue);
    this.dishInput.nativeElement.value = '';
    this.dishCrtl.setValue(null);
  }

  selected1(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList1.push(event.option.viewValue);
    this.dishInput1.nativeElement.value = '';
    this.dishCrtl1.setValue(null);
  }
  selected2(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList2.push(event.option.viewValue);
    this.dishInput2.nativeElement.value = '';
    this.dishCrtl2.setValue(null);
  }
  selected3(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList3.push(event.option.viewValue);
    this.dishInput3.nativeElement.value = '';
    this.dishCrtl3.setValue(null);
  }
  selected4(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList4.push(event.option.viewValue);
    this.dishInput4.nativeElement.value = '';
    this.dishCrtl4.setValue(null);
  }
  selected5(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList5.push(event.option.viewValue);
    this.dishInput5.nativeElement.value = '';
    this.dishCrtl5.setValue(null);
  }
  selected6(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList6.push(event.option.viewValue);
    this.dishInput6.nativeElement.value = '';
    this.dishCrtl6.setValue(null);
  }
  selected7(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList7.push(event.option.viewValue);
    this.dishInput7.nativeElement.value = '';
    this.dishCrtl7.setValue(null);
  }
  selected8(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList8.push(event.option.viewValue);
    this.dishInput8.nativeElement.value = '';
    this.dishCrtl8.setValue(null);
  }
  selected9(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList9.push(event.option.viewValue);
    this.dishInput9.nativeElement.value = '';
    this.dishCrtl9.setValue(null);
  }
  selected10(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList10.push(event.option.viewValue);
    this.dishInput10.nativeElement.value = '';
    this.dishCrtl10.setValue(null);
  }
  selected11(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList11.push(event.option.viewValue);
    this.dishInput11.nativeElement.value = '';
    this.dishCrtl11.setValue(null);
  }
  selected12(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList12.push(event.option.viewValue);
    this.dishInput12.nativeElement.value = '';
    this.dishCrtl12.setValue(null);
  }
  selected13(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList13.push(event.option.viewValue);
    this.dishInput13.nativeElement.value = '';
    this.dishCrtl13.setValue(null);
  }
  selected14(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList14.push(event.option.viewValue);
    this.dishInput14.nativeElement.value = '';
    this.dishCrtl14.setValue(null);
  }
  selected15(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList15.push(event.option.viewValue);
    this.dishInput15.nativeElement.value = '';
    this.dishCrtl15.setValue(null);
  }
  selected16(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList16.push(event.option.viewValue);
    this.dishInput16.nativeElement.value = '';
    this.dishCrtl16.setValue(null);
  }
  selected17(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList17.push(event.option.viewValue);
    this.dishInput17.nativeElement.value = '';
    this.dishCrtl17.setValue(null);
  }
  selected18(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList18.push(event.option.viewValue);
    this.dishInput18.nativeElement.value = '';
    this.dishCrtl18.setValue(null);
  }
  selected19(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList19.push(event.option.viewValue);
    this.dishInput19.nativeElement.value = '';
    this.dishCrtl19.setValue(null);
  }
  selected20(event: MatAutocompleteSelectedEvent): void {
    this.selectedDishList20.push(event.option.viewValue);
    this.dishInput20.nativeElement.value = '';
    this.dishCrtl20.setValue(null);
  }


  // selected1(event: MatAutocompleteSelectedEvent): void {
  //   this.sidedishSelect.push(event.option.viewValue);
  //   this.fruitInput.nativeElement.value = '';
  //   this.fruitCtrl.setValue(null);
  // }

  

  private _dish(value: any): any {
    //console.log(value)

    const filterValue = value.toLowerCase();
    //console.log(filterValue)
    //console.log(value)

    //console.log(this.mockSideDishList)

    return this.mockSideDishList.filter((dish: any) => dish.toLowerCase().includes(filterValue));
  }


  private _sidedish(value: any): any {
    //console.log(value)

    const filterValue = value.toLowerCase();
    //console.log(filterValue)
    //console.log(value)

    //console.log(this.maxSideDishList)

    return this.maxSideDishList.filter((dish: any) => dish.toLowerCase().includes(filterValue));
  }


  private _otherdish(value: any): any {
    const filterValue = value.toLowerCase();
    return this.otherDishList.filter((dish: any) => dish.toLowerCase().includes(filterValue));
  }


  




}
