import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Auth } from '../models/auth.model';

export const AUTHORIZE    =         'Authorize';
export const UNAUTHORIZE  =         'Unauthorize';

export class Authorize implements Action {
  readonly type = AUTHORIZE;

  constructor (public payload: Auth) {}
}

export class Unauthorize implements Action {
  readonly type = UNAUTHORIZE;

  constructor (public payload: Auth) {}
}

export type Actions = Authorize | Unauthorize;
