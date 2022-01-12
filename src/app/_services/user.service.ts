import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient,
              private userAuthService: UserAuthService
              ) { }

  URL: string = "http://localhost:9099";

  requestHeader = new HttpHeaders({
    "No-Auth": "True"
  });

  public authenticate(loginData: any) {
    return this.httpClient.post(this.URL + "/authenticate", loginData, { headers: this.requestHeader });
  }


  public roleMatch(allowedRoles:any):boolean{
    let isMatch= false;
    const userRoles:any = this.userAuthService.getRoles();
    if(userRoles!=null && userRoles){
      for(let i=0;i<userRoles.length;i++){
        for(let j=0; j< allowedRoles.length; j++){
            if(userRoles[i].roleName === allowedRoles[j]){
              isMatch=true;
            } 
        }
      }
    }
    return isMatch;
  } 

}
