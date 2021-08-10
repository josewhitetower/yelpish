import axios from 'axios';
import { IBusiness } from '../types/index';

const makeRequest = (query: string | string[]) => axios({
  url: 'http://localhost:3000',
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
  data: { query },
});

export const getBusinesses = async (query: string): Promise<IBusiness[]> => {
  const response = await makeRequest(query);

  return response.data.data.search.business;
};

export const getBusiness = async (query: string | string[]): Promise<IBusiness> => {
  const response = await makeRequest(query);

  return response.data.data.business;
};
