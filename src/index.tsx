import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const createApolloClient = () => {
  const token = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
  const headers = token !== '' ? { Authorization: `Bearer ${token}` } : {};
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_SERVER,
    headers,
  });

  return new ApolloClient<NormalizedCacheObject>({
    ssrMode: typeof window === 'undefined',
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

ReactDOM.render(
  <ApolloProvider client={createApolloClient()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
