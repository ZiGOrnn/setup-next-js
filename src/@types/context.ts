import { Dispatch } from "react";

export type ActionType = "SET_INITIAL";

export interface Action {
  type: ActionType;
  payload?: InitialState;
}

export interface InitialState {}

export interface ContextState {
  state: InitialState | null;
  dispatch?: Dispatch<Action>;
}
