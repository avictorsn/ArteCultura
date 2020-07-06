import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Observable } from 'rxjs';
import { User } from 'src/app/store/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user$: Observable<User>;

  constructor(private router: Router, public authService: AuthService, private store: Store<AppState>) { }

  ngOnInit() {
    this.user$ = this.store.select('user');
  }

  prepareLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
