import axios, { AxiosResponse } from 'axios';
import { IUser } from '../model/types';

enum Methods {
  GET = 'GET',
}

export const usersModelApi = {
  async getUsers(): Promise<AxiosResponse<IUser[], any>> {
    const res = await axios('https://jsonplaceholder.typicode.com/users', {
      method: Methods.GET,
    });

    return res;
  },
};
