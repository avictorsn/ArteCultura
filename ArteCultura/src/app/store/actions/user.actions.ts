import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export const SIGNUP =     'Signup';
export const LOGIN  =     'Login';

export class Signup implements Action {
  readonly type = SIGNUP;

  constructor (public payload: User) {}
}

export class Login implements Action {
  readonly type = LOGIN;

  constructor (public payload: User) {}
}

export type Actions = Signup | Login;
