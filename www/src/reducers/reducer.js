
import React from 'react';
import { GET_KING_RATINGS, GET_KING_BATTLES } from '../actions/index';

const INITIAL_STATE = { all: [] } ;

export default function PostsReducer(state = INITIAL_STATE, action) {

  switch(action.type){
    case GET_KING_RATINGS:
      //console.log(state);
      //console.log(action );
      return { ratings: action.payload.data.message };

    case GET_KING_BATTLES:
      console.log(action.payload.data.message);
      return { battles : action.payload.data.message }

     default:
      return state;
  }
}