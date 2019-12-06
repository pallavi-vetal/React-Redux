import axios from "axios";
import { SHOW_MATCHES } from "./types";

// Show Matches
export const setCurrentMatches = matches => {
    return {
      type: SHOW_MATCHES,
      payload: matches
    };
  };

export const showMatches = () => dispatch => {
  
  
   
     return axios.get("/api/users/matches")
     .then(response => {
         if (response.ok) {
           return response;
         } else {
           var error = new Error('Error ' + response.status + ': ' + response.statusText);
           error.response = response;
           console.log('Error')
           throw error;
         }
       },
       error => {
             var errmess = new Error(error.message);
             console.log('Error')
             throw errmess;
       })
     .then(response => response.json())
     .then(dishes => {
       console.log("Inside");
      dispatch(setCurrentMatches(dishes));
    })
     .catch(error => error.message);
};

