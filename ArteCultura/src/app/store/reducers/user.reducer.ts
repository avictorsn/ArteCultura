import { User } from '../models/user.model';
import * as UserActions from '../actions/user.actions';

const initialState: User = {
  username: 'admin',
  name:     'Administrador',
  email:    'adm@gmail.com'
};

export function reducer( state: User = initialState, action: UserActions.Actions) {
  switch (action.type) {
    case UserActions.SIGNUP:
      return {
        username: action.payload.username,
        name: action.payload.name,
        email: action.payload.email,
      };
    default:
      return state;
  }
}
