import { combineReducers } from "redux";

import auth from './auth';

export default combineReducers({
  auth
})


// import status from './status';
// //import member from './member';



// const rehydrated = (state = false, action) => {
//   switch (action.type) {
//     case 'persist/REHYDRATE':
//       return true;
//     default:
//       return state;
//   }
// };

// export default {
//   rehydrated,
//   status,
//   //member

// };
