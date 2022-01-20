import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid, List } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
// import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

// interface Props {
//     activities: Activity[];
//     // createOrEdit: (activity: Activity) => void;
//     deleteActivity: (id: string) => void;
//     submitting: boolean;
// }

export default observer(function ActivityDashboard() {

    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore;    

    useEffect(() => {   
       activityStore.loadActivities();
    }, [activityStore])

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>

    return (
        <Grid>
            <Grid.Column width='10'>
                 <ActivityList /*activities={activities} 
                deleteActivity={deleteActivity}
                submitting={submitting}*/
                />
            </Grid.Column>
            <Grid.Column width='6'>
                <h2>Activity filters</h2>
            </Grid.Column>
        </Grid>
    )
})