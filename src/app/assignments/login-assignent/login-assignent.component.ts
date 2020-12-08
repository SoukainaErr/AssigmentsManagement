import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { UserService } from 'src/app/shared/user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login-assignent',
  templateUrl: './login-assignent.component.html',
  styleUrls: ['./login-assignent.component.css']
})
export class LoginAssignentComponent implements OnInit {

  constructor(private userService:UserService,private authService:AuthService, private router:Router) { }
  user:User;
  pseudo="";
  pwd="";

  ngOnInit(): void {
  }

  onLoggingIn($event){
    event.preventDefault();
    this.userService.getUser(this.pseudo).
    subscribe(uti=>this.user=uti);
    if(this.user===null || this.user.pwd!=this.pwd){
      this.router.navigate(['/home']);
    }
    else{
      this.authService.logIn(this.user);
      this.router.navigate(['/home'])
    }

  }

}
