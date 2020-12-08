import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService:AuthService){}

  onInit(){

  }

  title = 'Assignments des Intense';
  logged=this.authService.loggedIn;

  logOut(){
    this.authService.LogOut();
  }

}
