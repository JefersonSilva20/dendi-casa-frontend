import { Component, OnInit } from '@angular/core';
import { USER_DISPLAY_NAME_LOCAL_STORAGE } from 'src/app/models/constants/local-storage';
import { LoginAuthService } from 'src/app/services/login-auth/login-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public displayName: string;
  constructor(private loginAuthService: LoginAuthService) { }

  ngOnInit(): void {
    this.displayName = localStorage.getItem(USER_DISPLAY_NAME_LOCAL_STORAGE);
  }

  logout(){
    this.loginAuthService.logout();
  }

}
