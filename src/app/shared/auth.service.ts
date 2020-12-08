import { Injectable } from '@angular/core';
import { User } from '../assignments/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn=false;
  connected:User;

  logIn(user:User){
    this.loggedIn=true;
    this.connected=user;
    console.log("You are logged in");
  }
  LogOut(){
    this.loggedIn=false;
    console.log("You are logged out");
  }

  isAdmin(){
    const isUserAdmin=new Promise( (resolve,reject)=>{resolve(this.connected.isAdmin)});
    return isUserAdmin;
  }

  isConnected(){
    const isConn= new Promise((resolve,reject)=>{resolve(this.loggedIn)});
    return isConn;
  }

  constructor(private userService:UserService) { }
}
