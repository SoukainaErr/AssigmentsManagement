import { Injectable } from '@angular/core';
import {User} from '../assignments/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users:User[]=[
    {
      id:1,
      pseudoname:"Soukaina",
      pwd:"whatever",
      isAdmin:true
    },
    {
      id:2,
      pseudoname:"user",
      pwd:"user",
      isAdmin:false
    }
  ];

  getNewId():number{
    return this.users.length+1;
  }

  addNewUser(user:User): Observable<String>{
    user.id=this.getNewId();
    this.users.push(user);
    return of(+user.id+" user added");
  }

  getUser(pseudo):Observable<User>{
    return of(this.users.find(u=> u.pseudoname===pseudo));
  }
}
