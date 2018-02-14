import * as React from 'react';
import './AddCar.css';

import autobind from 'autobind-decorator';
import { Step, NewCarWizard } from './shared/new-car-wizard';
import { RootRoute } from '../../routing/Routes';
import { InfoButton } from '../shared/info-button/InfoButton';
import { Modal } from '../shared/modal/Modal';
import { Input } from '../shared/input/Input';

enum Steps {
  Weight,
  Tires,
  Suspension,
  BodyType,
  Name,
  SafeDriving
}

interface AddCarProps {
  history: any;
}

interface AddCarState {
  step: number;
  infoModalVisible: boolean;
}

export class AddCar extends React.Component<AddCarProps, AddCarState> {
  constructor(props: AddCarProps) {
    super(props);

    this.state = {
      step: 0,
      infoModalVisible: false
    };
  }

  @autobind
  onCancel() {
    this.props.history.push(RootRoute);
  }

  @autobind
  onDone() {
    console.log('add car');
  }

  @autobind
  onStep(step: number) {
    this.setState({ step });
  }

  @autobind
  showInfo() {
    this.toggleInfoModal(true);
  }

  @autobind
  toggleInfoModal(visible: boolean) {
    this.setState({ infoModalVisible: visible });
  }

  render() {
    return (
      <section className="add-car">
        <div className="logo" />
        <NewCarWizard onCancel={this.onCancel} onDone={this.onDone} onStep={this.onStep}>
          <Step title={<>Car Weight <InfoButton onClick={this.showInfo} /></>} disableNext={false}>
            What is your car weight?
            <Input
              type="number"
              className="weight-input"
              onChange={() => {console.log('a'); }}
              placeholder="e.g. 1500"
              unit="kg"
            />
          </Step>
          <Step title={<>Tires <InfoButton onClick={this.showInfo} /></>}>
            How do you judge you tires condition and quality?
          </Step>
          <Step title={<>Suspension <InfoButton onClick={this.showInfo} /></>}>
            What is your suspension stiffness?
          </Step>
          <Step title={<>Body Type <InfoButton onClick={this.showInfo} /></>}>
            What is your body type?
          </Step>
          <Step title="Name">
            Pick a name for this car setup.
          </Step>
          <Step title="Be safe!">
            Last but not least, be safe!
          </Step>
        </NewCarWizard>
        {this.renderInfoModal()}
      </section>
    );
  }

  renderInfoModal() {
    return (
      <Modal
        title="Info"
        visible={this.state.infoModalVisible}
        onToggle={this.toggleInfoModal}
      >
        {(() => {
          switch (this.state.step) {
            case Steps.Weight: default:
              return 'We need it for the normal force, i.e. calculating mechanical grip.';
            case Steps.Tires:
              return 'Good tires have greater grip while poor, less. By this we can determine the grip coefficient.';
            case Steps.Suspension:
              return 'Needed for calculating the weight distribution hence grip of different tires.';
            case Steps.BodyType:
              return 'Needed for calculating the aerodynamical grip.';
          }
        })()}
      </Modal>
    );
  }
}
