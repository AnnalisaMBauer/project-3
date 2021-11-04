import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import pages from "./pages";
import { setContext } from "@apollo/client/link/context";


const httpLink = createHttpLink({ uri: "/graphql" });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const contain = { padding: "0 8.5em", overflow: 'hidden', };

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ProtectedRoute />
        <div style={contain}>
          <NavBar />
       
          <Switch>
            {pages.map(({ Component, path, exact, isProtected }) =>
              isProtected ? (
                <ProtectedRoute path={path} exact={exact}>
                  <Component />
                </ProtectedRoute>
              ) : (
                <Route path={path} exact={exact}>
                  <Component />
                </Route>
              )
              )}
          </Switch>
        </div>
        <Footer />
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
