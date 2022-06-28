import { InitialState, Action } from "../@types/context";
import { initialState } from "./context";

export const reducer = (
  state: InitialState,
  { type, payload }: Action
): InitialState => {
  switch (type) {
    case "SET_INITIAL":
      return initialState;
    default:
      return state;
  }
};
