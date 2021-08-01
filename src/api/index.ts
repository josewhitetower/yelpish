/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { Business } from '../types/index';

export const getBusinesses = async (query: string): Promise<Business[]> => {
  const response = await axios({
    url: 'http://localhost:3000',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { query },
  });

  return response.data.data.search.business;
};
