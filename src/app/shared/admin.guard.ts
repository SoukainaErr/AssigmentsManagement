import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../assignments/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  user:User;
  constructor(private authService:AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAdmin().
    then((admin:Boolean)=>{
      if(admin) return true;
      else{
        this.router.navigate(['/home']);
        return false;
      }
    }) 
  }
  
}
