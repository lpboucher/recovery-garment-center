import React, { Component } from 'react';
import { Collapse, Button, Container } from 'reactstrap';

class VideoToggle extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>How To</Button>
        <Collapse isOpen={this.state.collapse}>
          <Container style={{height: '600px'}}>
            Test
          </Container>
        </Collapse>
      </div>
    );
  }
}

export default VideoToggle;