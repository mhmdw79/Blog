import React from 'react';
import ReactDOM from 'react-dom/client';
import './styled/index.css';
import "./styled/fonts.css"
import App from './App';
import {ApolloClient,InMemoryCache,ApolloProvider} from "@apollo/client"
import { ThemeProvider } from '@mui/material';
import theme from './mui/theme,';
import {BrowserRouter} from "react-router-dom"
const client = new ApolloClient({
  uri:"https://api-us-west-2.hygraph.com/v2/cl5nygi5v17g501ui3udnaa03/master",
  cache:new InMemoryCache()
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
    <BrowserRouter>
    
     <ThemeProvider theme={theme}>
                  <App />

      </ThemeProvider>
</BrowserRouter>
    </ApolloProvider>
);


