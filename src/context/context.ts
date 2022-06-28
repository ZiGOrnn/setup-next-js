import { createContext } from 'react';
import { ContextState, InitialState } from '../@types/context';

export const initialState: InitialState = {
  mode: '',
};

export const Context = createContext<ContextState>({
  state: initialState,
});
