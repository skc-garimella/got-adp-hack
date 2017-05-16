
import axios from 'axios';
import React from 'react';

export const GET_KING_RATINGS = 'GET_KING_RATINGS';
export const GET_KING_BATTLES = 'GET_KING_BATTLES';

const DB_URL = '/api';

export function getRatings() {
  const url = `${DB_URL}/ratings`;
  const request = axios.get(url);
  
  return ({
    type : GET_KING_RATINGS,
    payload : request
  });
}

export function getBattles(name) {
  const url = `${DB_URL}/${encodeURIComponent(name)}`;
  console.log(url);
  const request = axios.get(url);
  
  return ({
    type : GET_KING_BATTLES,
    payload : request
  });
}

export function FilterRatings(term) {
   
  return ({
    type : FILTER_RATINGS,
    payload : request
  });
}