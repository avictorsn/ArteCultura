import { secretKey } from './../../auth/constants';
import { Authorize } from './../../store/actions/auth.actions';
import { Signup } from './../../store/actions/user.actions';
import { AuthService } from './../../services/auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/store/models/user.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public user$: Observable<User>;

  constructor(private router: Router, private authService: AuthService, private store: Store<AppState>) { }

  ngOnInit() {
    this.user$ = this.store.select('user');
  }

  onSubmit(loginForm: NgForm) {
    this.store.dispatch(new Signup({username: 'ok', name: 'Victor', email: loginForm.value.email}));
    this.authService.login(loginForm.value.email, loginForm.value.password).subscribe((result) => {
      if (!!result.data['login']['token']) {
        this.store.dispatch(new Authorize({
          userId: result.data['login']['userId'],
          token: result.data['login']['token'],
          expiration: result.data['login']['userId']
        }));
        localStorage.setItem(secretKey, result.data['login']['token']);
        this.router.navigateByUrl('/index');
      }
    });
  }

}
