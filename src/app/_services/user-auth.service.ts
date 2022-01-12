import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles:[]){
    localStorage.setItem('roles',JSON.stringify(roles));
  }


  public getRoles():[]{
    return JSON.parse(localStorage.getItem('roles')!);
  }

  public setToken(jwtToken:string){
    localStorage.setItem('jwtToken',jwtToken);
  }

  public getToken():string{
    return localStorage.getItem('jwtToken')!;
  }

  public setUserName(userName:string){
    localStorage.setItem('userName',userName);
  }
  public getUserName():string{
    return localStorage.getItem('userName')!;
  }

  public clearLocalStorage(){
    localStorage.clear();
  }

  public isLoggedIn(){
    return this.getRoles() && this.getToken();
  }


}
