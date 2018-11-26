import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from './theme';
import Header from './Header';
import List from './List';
import Tabs from './Tabs';

const ContentWrapper = styled.section`
  background: ${colors.bg};
`;

const LobbyList = () => (
  <ContentWrapper>
    <Helmet>Пообедаем?</Helmet>
    <List />
  </ContentWrapper>
);

const LobbyPage = () => (
  <ContentWrapper>
    <Helmet>Lobby</Helmet>
    Lobby
  </ContentWrapper>
);

const Login = () => (
  <ContentWrapper>
    <Helmet>Lobby</Helmet>
    Lobby
  </ContentWrapper>
);

const Profile = () => (
  <ContentWrapper>
    <Helmet>Lobby</Helmet>
    Lobby
  </ContentWrapper>
);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <React.Fragment>
            <Route path="/" component={LobbyList} />
            <Route path="/Lobby" component={LobbyPage} />
            <Route path="/Login" component={Login} />
            <Route path="/Profile" component={Profile} />
            <Tabs />
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
