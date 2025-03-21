import { create } from 'zustand';

import { IUser } from './types';
import { usersModelApi } from '../api/userModelApi';

interface UserStore {
  users: IUser[];
  fetchUsers: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  fetchUsers: async () => {
    try {
      const response = await usersModelApi.getUsers();
      set({ users: response.data });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },
}));
