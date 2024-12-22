import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// import type {} from '@redux-devtools/extension'; // required for devtools typing

interface PlaygroundState {
  bears: number;
  url: string;
  increase: (by: number) => void;
  setUrl: (newUrl: string) => void;
}

export const usePlaygroundStore = create<PlaygroundState>()(
  devtools(
    // persist(
    // )
    (set) => ({
      bears: 0,
      url: '/',
      setUrl: (newUrl: string) => set({ url: newUrl }),
      increase: (by) => set((state) => ({ bears: state.bears + by })),
    }),
    {
      name: 'playground-storage',
    }
  )
);
