import { Dispatch } from 'react';

export type ActionType = 'SET_INITIAL' | 'SET_MODE';

export interface InitialState {
  mode?: string;
}
export interface Action {
  type: ActionType;
  payload?: InitialState;
}
export interface ContextState {
  state: InitialState | null;
  dispatch?: Dispatch<Action>;
}
