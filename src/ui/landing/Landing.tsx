import * as React from 'react';
import './Landing.css';

import autobind from 'autobind-decorator';
import { Button } from '../shared/button/Button';
import { InfoButton } from '../shared/info-button/InfoButton';
import { Modal } from '../shared/modal/Modal';
import { DataStore } from '../../model';
import { AddCarRoute } from '../../routing/Routes';

const ExitAnimationDuration = 1200;

interface LandingProps {
  data: DataStore;
  history: any;
}

interface LandingState {
  aboutVisible: boolean;
  pageExiting: boolean;
}

export class Landing extends React.Component<LandingProps, LandingState> {
  constructor(props: LandingProps) {
    super(props);
    this.state = {
      aboutVisible: false,
      pageExiting: false
    };
  }

  @autobind
  toggleAboutWindow(visible: boolean) {
    this.setState({ aboutVisible: visible });
  }

  @autobind
  openAboutModal() {
    this.setState({ aboutVisible: true });
  }

  @autobind
  addCar() {
    this._onPageLeave(() => {
      this.props.history.push(AddCarRoute);
    });
  }

  render() {
    return (
      <section className={'landing page-fade-in-2s' + (this.state.pageExiting ? ' exiting' : '')}>
        <div className="logo" />
        <Button onClick={this.addCar}>ADD A CAR</Button>
        { !!this.props.data.cars.length && (
          <Button>LOAD A CAR</Button>
        )}
        { this.props.data.selectedCar && (
          <Button>LOAD LAST CAR</Button>
        )}
        <InfoButton onClick={this.openAboutModal} />
        {this.renderAboutModal()}
      </section>
    );
  }

  renderAboutModal() {
    return (
      <Modal
        title="About"
        visible={this.state.aboutVisible}
        onToggle={this.toggleAboutWindow}
      >
        Grip is a mobile web app which aims to roughly estimate the mechanical
        and aerodynamical grip of your car while driving using your phone's
        accelerometer, gyroscope and GPS.
        <br/><br/>
        <span className="disclaimer">
          DISCLAIMER: Do not rely on the data for real performance driving! The
          app was developed purely for fun.
        </span>
        <br/><br/>
        <hr />
        <span className="by">
          Developed by Georgi Serev<br/>
          <a href="https://github.com/hawkgs/grip" target="_blank">GitHub Repo</a>
        </span>
      </Modal>
    );
  }

  private _onPageLeave(cb: () => any) {
    this.setState({ pageExiting: true }, () => {
      setTimeout(cb, ExitAnimationDuration);
    });
  }
}
