import * as React from 'react';
import './AddCar.css';

import autobind from 'autobind-decorator';
import { Step, NewCarWizard } from './shared/new-car-wizard';
import { RootRoute } from '../../routing/Routes';
import { InfoButton } from '../shared/info-button/InfoButton';
import { Modal } from '../shared/modal/Modal';
import { Input } from '../shared/input/Input';
import { Switch } from '../shared/switch/Switch';
import { MultiSelector, Option } from '../shared/multi-selector';

import { Tires, Units, Suspension, CarBodyType } from '../../model';

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
  unitSystem: Units;
}

export class AddCar extends React.Component<AddCarProps, AddCarState> {
  constructor(props: AddCarProps) {
    super(props);

    this.state = {
      step: 0,
      infoModalVisible: false,
      unitSystem: Units.Metric
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
  onUnitSystemChange(isImperial: boolean) {
    this.setState({
      unitSystem: isImperial ? Units.Imperial : Units.Metric
    });
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
              onChange={() => { /**/ }}
              placeholder={`e.g. ${this.state.unitSystem === Units.Metric ? '1500' : '3300'}`}
              unit={this.state.unitSystem === Units.Metric ? 'kg' : 'lbs'}
            />
            <Switch
              className="unit-system"
              labels={{ left: 'Metric', right: 'Imperial' }}
              onChange={this.onUnitSystemChange}
            />
          </Step>
          <Step title={<>Tires <InfoButton onClick={this.showInfo} /></>}>
            How do you judge your tires condition and quality?
            <MultiSelector onSelect={console.log} default={Tires.Average}>
              <Option value={Tires.Excellent}>Excellent</Option>
              <Option value={Tires.Good}>Good</Option>
              <Option value={Tires.Average}>Average</Option>
              <Option value={Tires.Fair}>Fair</Option>
              <Option value={Tires.Poor}>Poor</Option>
            </MultiSelector>
          </Step>
          <Step title={<>Suspension <InfoButton onClick={this.showInfo} /></>}>
            What is your suspension stiffness?
            <MultiSelector onSelect={console.log} default={Suspension.Medium}>
              <Option value={Suspension.Stiff}>Stiff</Option>
              <Option value={Suspension.Medium}>Medium</Option>
              <Option value={Suspension.Soft}>Soft</Option>
            </MultiSelector>
          </Step>
          <Step title={<>Body Type <InfoButton onClick={this.showInfo} /></>}>
            What is your body type?
            <MultiSelector onSelect={console.log} default={CarBodyType.Regular}>
              <Option value={CarBodyType.Sports}>Sports</Option>
              <Option value={CarBodyType.Regular}>Regular</Option>
              <Option value={CarBodyType.Family}>Family</Option>
            </MultiSelector>
          </Step>
          <Step title="Name">
            Pick a name for this car setup.
            <Input
              type="text"
              placeholder="e.g. Nissan 370Z"
              onChange={() => { /**/ }}
            />
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
