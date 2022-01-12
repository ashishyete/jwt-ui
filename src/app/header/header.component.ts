import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userAuth : UserAuthService, 
              private router:Router,
              private userSvc:UserService
              ) { }

  ngOnInit(): void {
  }

  public isLoggedIn(){
    return this.userAuth.isLoggedIn();
  }

  public logOut(){
    this.userAuth.clearLocalStorage();
    this.router.navigate(['/home']);
  }

  public roleAccess(role:any){
    return this.userSvc.roleMatch(role);
  }

}
