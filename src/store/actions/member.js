import ErrorMessages from '../../constants/errors';
import statusMessage from './status';

import {USER_DETAILS_UPDATE, USER_LOGIN, USER_RESET, USER_ERROR } from './actionTypes';

/**
  * Sign Up to Firebase
  */
export function signUp(formData) {
  const {
    email,
    password,
    password2,
    firstName,
    lastName,
  } = formData;

  }

/**
  * Get this User's Details
  */
function getUserData(dispatch) {
}

export function getMemberData() {
}

/**
  * Login to Firebase with Email/Password
  */
export function login(formData) {
  const {
    email,
    password,
  } = formData;

  return dispatch => new Promise(async (resolve, reject) => {
    await statusMessage(dispatch, 'loading', true);

    // Validation checks
    if (!email) return reject({ message: ErrorMessages.missingEmail });
    if (!password) return reject({ message: ErrorMessages.missingPassword });

    
    return true
      
  }).catch(async (err) => {
    await statusMessage(dispatch, 'loading', false);
    throw err.message;
  });
}

/**
  * Reset Password
  */
export function resetPassword(formData) {
  const { email } = formData;

  
}

/**
  * Update Profile
  */
export function updateProfile(formData) {
  const {
    email,
    password,
    password2,
    firstName,
    lastName,
    changeEmail,
    changePassword,
  } = formData;

  
}

/**
  * Logout
  */
export function logout() {
 
}
