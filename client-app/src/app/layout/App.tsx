import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Activity } from './models/activity';
import NavBar from './NavBar';

function App() {
  const [activities, setActivities] = useState<Activity[]>([])
  
  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5001/activities').then(Response => {
      setActivities(Response.data);
    })
  }, [])
  
  // @ts-ignore
  return (
    <div>
      <NavBar />
      <List>
      {activities.map(activity => (
           <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
      ))}
      </List>
    </div>
  );
}

export default App;
