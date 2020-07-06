import { secretKey } from './../../auth/constants';
import { Auth } from '../models/auth.model';
import * as AuthActions from '../actions/auth.actions';

const initialState: Auth = {
  userId:       '',
  token:        localStorage.getItem(secretKey),
  expiration:   3
};

export function reducer ( state: Auth = initialState, action: AuthActions.Actions) {
  switch (action.type) {
    case AuthActions.AUTHORIZE:
      return {
        userId: action.payload.userId,
        token: action.payload.token,
        expiration: action.payload.expiration,
      };
    default:
      return initialState;
  }
}
