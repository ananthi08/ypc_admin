import { Component } from '@angular/core';


export interface UserdetailsComponent {
  id: string;
  adminId: string;
  internationalCuisine: string[];
  nationalCuisine: string[];
  foodPreference: string;
  status: number; 
}
