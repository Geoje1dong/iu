import React from 'react';
import Header from './components/header'
import {createGlobalStyle} from 'styled-components'
import Content from './components/content'
import './app.css'
function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Content />
      {/* <Test /> */}
    </React.Fragment>
  );
}

const GlobalStyle = createGlobalStyle`
  #root{
    width:100vw;
    height:100vh;
  }
  button{
    font-family: 'Chicago Plain';
  }
  body{
    position:relative;
    margin:0;
    padding:0;
    font-family: 'Chicago Plain';
    font-size:12px;
    height:100%;
    background:#f5f37a;
    overflow:hidden;
  }
  ul, li{
    list-style:none;
    padding:0;
    margin:0;
  }
`

export default App;
