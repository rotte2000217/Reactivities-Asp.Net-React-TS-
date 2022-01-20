import React, { useEffect, useState } from 'react';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
// import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import HomePage from '../../features/activities/home/HomePage';
import { Route } from 'react-router-dom';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  // @ts-ignore
  return (
    <>
      <NavBar />
        <Container style = {{marginTop: '7em'}}>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/activities' component={ActivityDashboard}/>
            <Route path='/activities/:id' component={ActivityDetails}/>
            <Route path='/createActivity' component={ActivityForm}/>
        </Container>
    </>
  );
}

export default observer(App);
