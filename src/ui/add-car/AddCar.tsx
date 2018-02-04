import * as React from 'react';

import autobind from 'autobind-decorator';
import { Step, NewCarWizard } from './shared/new-car-wizard';
import { RootRoute } from '../../routing/Routes';

interface AddCarProps {
  history: any;
}

export class AddCar extends React.Component<AddCarProps, {}> {
  @autobind
  onCancel() {
    this.props.history.push(RootRoute);
  }

  @autobind
  onDone() {
    console.log('add car');
  }

  render() {
    return (
      <section className="add-car">
        <div className="logo" />
        <NewCarWizard onCancel={this.onCancel} onDone={this.onDone}>
          <Step title="Step 1" disableNext={true}>
            step 1
          </Step>
          <Step title="Step 2">
            step 2
          </Step>
          <Step title="Step 3">
            step 3
          </Step>
        </NewCarWizard>
      </section>
    );
  }
}
