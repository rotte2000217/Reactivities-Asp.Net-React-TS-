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
import { Route, Routes } from 'react-router-dom';
import ActivityForm from '../../features/activities/form/ActivityForm';

function App() {
  const {activityStore} = useStore();

  // const [activities, setActivities] = useState<Activity[]>([]);
  // const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  // const [editMode, setEditMode] = useState(false);
  // const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])
  

  // function handleCreateOrEditActivity(activity: Activity) {
  //   setSubmitting(true);
  //   if (activity.id) {
  //     agent.Activities.update(activity).then(() => {
  //       setActivities([...activities.filter(x => x.id !== activity.id), activity])
  //       setSelectedActivity(activity);
  //       setEditMode(false);
  //       setSubmitting(false);
  //     })
  //   } else {
  //     activity.id = uuid();
  //     agent.Activities.create(activity).then(() => {
  //       setActivities([...activities, activity])
  //       setSelectedActivity(activity);
  //       setEditMode(false);
  //       setSubmitting(false);
  //     })
  //   }
  // }

  // function handleDeleteActivity(id: string) {
  //   setSubmitting(true);
  //   agent.Activities.delete(id).then(() => {
  //     setActivities([...activities.filter(x => x.id !== id)])
  //     setSubmitting(false);
  //   })
  // }

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>

  // @ts-ignore
  return (
    <>
      <NavBar />
        <Container style = {{marginTop: '7em'}}>
          <Routes>
            <Route path ="/" element={<HomePage/>} />
            <Route path ='/activities' element={<ActivityDashboard/>} />
            <Route path ='/createActivity' element={<ActivityForm/>} />
          </Routes>
        </Container>
    </>
  );
}

export default observer(App);
