import React from 'react';
import './App.css';
import { Router as BrowserRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
// import { createBrowserHistory } from 'history';
import { createBrowserHistory } from 'history';
import { ApolloProvider } from 'react-apollo';
import Home from './components/Home';
const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) => {
          if (message === 'Not Logged In') {
            console.error('Not Logged In');
          } else {
            console.error(message);
          }
          return null;
        });
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: process.env.REACT_APP_GRAPHQL_SERVER,
      credentials: 'same-origin',
    }),
  ]),
  cache: new InMemoryCache(),
});
const history = createBrowserHistory();
function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
