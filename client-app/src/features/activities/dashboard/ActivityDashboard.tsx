import { Grid, GridColumn } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activities';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';

interface Props {
  activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
  return (
    <Grid>
      <Grid.Column width='10'>
        <ActivityList activities={activities} />
      </Grid.Column>
      <GridColumn width='6'>
        {activities[0] && <ActivityDetails activity={activities[0]} />}
      </GridColumn>
    </Grid>
  );
}
