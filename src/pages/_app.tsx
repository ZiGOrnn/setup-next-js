import React from 'react';
import { AppProps } from 'next/app';
import { Context, initialState, reducer } from '../context';
import '../../public/styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = React.useMemo(() => ({ state, dispatch }), [state]);
  return (
    <Context.Provider value={value}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default App;
