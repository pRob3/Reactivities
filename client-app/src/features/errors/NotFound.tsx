import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';

export default function NotFound() {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name='search' />
        Oops - we've looked everywhere on the server but couldn't find this.
      </Header>
      <Segment.Inline>
        <Button as={Link} to='/activities'>
          Return to Activities
        </Button>
      </Segment.Inline>
    </Segment>
  );
}
