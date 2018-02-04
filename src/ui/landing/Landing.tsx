import * as React from 'react';
import './Landing.css';

import { Button } from '../shared/button/Button';
import { InfoButton } from '../shared/info-button/InfoButton';
import { DataStore } from '../../model';

interface LandingProps {
  data: DataStore;
}

export class Landing extends React.Component<LandingProps, {}> {
  render() {
    return (
      <section className="landing">
        <div className="logo" />
        <Button>ADD A CAR</Button>
        {/* {!!this.props.data.cars.length && ( */}
          <Button>LOAD A CAR</Button>
          <Button>LOAD LAST CAR</Button>
        {/* )} */}
        <InfoButton onClick={() => { console.log('d'); }} />
      </section>
    );
  }
}
