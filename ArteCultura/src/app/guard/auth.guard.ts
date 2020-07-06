import { Injectable } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  // Index route;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.authenticated()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }

  // Login route;
  resolve() {
    if (this.authService.authenticated()) {
      this.router.navigate(['/index']);
    }
  }
}
