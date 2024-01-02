import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})



export class DbService {


  baseUrl = environment.api_url;
  authkey = environment.api_key;
  appname = environment.app_name
   httpClient: any;


   constructor(private http: HttpClient, private router: Router,)  { }
 
  
// to allow all-routes
isAuthenticated(): boolean {
  const idCard = localStorage.getItem('id');
  console.log('ID Card:', idCard);
  return !!idCard;
}



 
  postdata(path: string, formData: any): Observable<any> {
    const headers = {
      'content-type': 'application/json; charset=UTF-8',
      'application-name' : this.appname,
      'auth-key': this.authkey,
    };

    return this.http.post(this.baseUrl + path, formData, { headers }).pipe(
      map((data: any) => {
        return data;
      }),
      catchError(HttpErrorResponse => {
        return throwError(() => HttpErrorResponse);
      })
    );
  }


  putdata(path: string, formData: any): Observable<any> {
    const headers = {
      'content-type': 'application/json; charset=UTF-8',
      'application-name': this.appname,
      'auth-key': this.authkey,
    };
  
    return this.http.put(this.baseUrl + path, formData, { headers }).pipe(
      map((data: any) => {
        return data;
      }),
      catchError(HttpErrorResponse => {
        return throwError(() => HttpErrorResponse);
      })
    );
  }




  paramsData(path: string): Observable<any> {
    const headers = {
      'content-type': 'application/json; charset=UTF-8',
      'application-name' : this.appname,
      'auth-key': this.authkey,
    };
  
    return this.http.post(this.baseUrl + path, {}, { headers }).pipe(
      map((data: any) => {
        return data;
      }),
      catchError(HttpErrorResponse => {
        return throwError(() => HttpErrorResponse);
      })
    );
  }
  



  getData(path: string ): Observable<any> {
    const headers = {
      'Content-Type': 'application/json; charset=UTF-8',
      'application-name' : this.appname,
      'auth-key': this.authkey,
    };

    return this.http.get(this.baseUrl + path, { headers }).pipe(
      map((data: any) => {
        return data;
      }),
      catchError(HttpErrorResponse => {
        return throwError(() => HttpErrorResponse);
      })
    );
  }

  updateData(path: string, updateFormData: any): Observable<any> {
    const headers = {
      'Content-Type': 'application/json; charset=UTF-8',
      'application-name' : this.appname,
      'auth-key': this.authkey,
    };

    return this.http.put(this.baseUrl + path, updateFormData, { headers }).pipe(
      map((data: any) => {
        return data;
      }),
      catchError(HttpErrorResponse => {
        return throwError(() => HttpErrorResponse);
      })
    );
  }

  deleteData(path: string): Observable<any> {
    const headers = {
      'Content-Type': 'application/json; charset=UTF-8',
      'application-name' : this.appname,
      'auth-key': this.authkey,
    };

    return this.http.delete(this.baseUrl + path, { headers }).pipe(
      map((data: any) => {
        return data;
      }),
      catchError(HttpErrorResponse => {
        return throwError(() => HttpErrorResponse);
      })
    );
  }


}
