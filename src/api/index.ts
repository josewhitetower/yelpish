import axios from 'axios';
import { Business } from '../types/index';

const makeRequest = (query: string | string[]) => axios({
  url: 'http://localhost:3000',
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
  data: { query },
});

export const getBusinesses = async (query: string): Promise<Business[]> => {
  const response = await makeRequest(query);

  return response.data.data.search.business;
};

export const getBusiness = async (query: string | string[]): Promise<Business> => {
  const response = await makeRequest(query);

  return response.data.data.business;
};
