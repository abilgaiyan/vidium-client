
import {USER_LOGIN, USER_DETAILS_UPDATE, USER_ERROR, USER_RESET} from '../actions/actionTypes';

export const initialState = {
loading: false,
error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN: {
      if (action.data) {
        return {
          ...state,
          loading: false,
          error: null,
          uid: action.data.uid,
          email: action.data.email,
          emailVerified: action.data.emailVerified,
        };
      }
      return initialState;
    }
    case USER_DETAILS_UPDATE: {
      if (action.data) {
        return {
          ...state,
          loading: false,
          error: null,
          firstName: action.data.firstName,
          lastName: action.data.lastName,
          signedUp: action.data.signedUp,
          role: action.data.role,
        };
      }
      return initialState;
    }
    case USER_ERROR: {
      if (action.data) {
        return {
          ...state,
          loading: false,
          error: action.data,
        };
      }
      return initialState;
    }
    case USER_RESET: {
      return initialState;
    }
    default:
      return state;
  }
}
