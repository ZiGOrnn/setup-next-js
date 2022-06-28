import React from "react";
import { AppProps } from "next/app";
import { Context, initialState, reducer } from "../context";

const App = ({ Component, pageProps }: AppProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <Context.Provider value={value}>
      <Component {...pageProps} />
    </Context.Provider>
  );
};

export default App;
