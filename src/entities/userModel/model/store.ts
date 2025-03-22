import { create } from 'zustand';

import { IUser } from './types';
import { usersModelApi } from '../api/userModelApi';

interface UserStore {
  isLoading: boolean;
  users: IUser[];
  fetchUsers: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  isLoading: false,
  users: [],
  fetchUsers: async () => {
    set({ isLoading: true });
    try {
      const response = await usersModelApi.getUsers();
      set({ users: response.data });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    set({ isLoading: false });
  },
}));
