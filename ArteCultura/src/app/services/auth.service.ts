import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { secretKey } from './../auth/constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apollo: Apollo) { }

  login(email: string, password: string) {
    return this.apollo.watchQuery({
      query: gql`
      {
        login (email: "${email}", password: "${password}") {
          userId,
          token,
          expiration
        }
      }
      `
    }).valueChanges;
  }

  authenticated() {
    return !!localStorage.getItem(secretKey);
  }

  logout() {
    localStorage.removeItem(secretKey);
  }

  getToken() {
    return localStorage.getItem(secretKey);
  }


}
