import * as React from 'react';
import './NewCarWizard.css';

import autobind from 'autobind-decorator';
import { Button } from '../../../shared/button/Button';

enum Move {
  Forward = 1,
  Backward = -1
}

interface NewCarWizardProps {
  onCancel: () => void;
  onDone: () => void;
  onStep: (i: number) => void;
  children?: any;
}

interface NewCarWizardState {
  step: number;
}

export class NewCarWizard extends React.Component<NewCarWizardProps, NewCarWizardState> {
  constructor(props: NewCarWizardProps) {
    super(props);
    this.state = {
      step: 0
    };
  }

  get step() {
    return this.props.children[this.state.step];
  }

  @autobind
  next() {
    if (this.state.step < this.props.children.length - 1) {
      this._changeStep(Move.Forward);
    } else {
      this.props.onDone();
    }
  }

  @autobind
  prev() {
    if (this.state.step > 0) {
      this._changeStep(Move.Backward);
    } else {
      this.props.onCancel();
    }
  }

  render() {
    return (
      <div className="new-car-wizard page-fade-in-1s">
        {this.props.children.map((c: any, i: number) =>
          <div
            className="step page-fade-in-1s"
            style={{ display: i === this.state.step ? 'block' : 'none' }}
            key={'step-' + i}
          >
            <h3>{this.step.props.title}</h3>
            {c}
          </div>
        )}
        <div className="nav">
          <Button onClick={this.prev} disabled={this.step.props.disablePrev}>
            {this.state.step > 0 ? 'BACK' : 'CANCEL'}
          </Button>
          <div className="dots">
            {(() => {
              let dots: any = [];
              for (let i = 0; i < this.props.children.length; i += 1) {
                let className = '';

                if (i <= this.state.step) {
                  className = 'done';
                }
                dots.push(<span className={className} key={'dt-' + i} />);
              }
              return dots;
            })()}
          </div>
          <Button onClick={this.next} disabled={this.step.props.disableNext}>
            {this.state.step < this.props.children.length - 1 ? 'NEXT' : 'DONE'}
          </Button>
        </div>
      </div>
    );
  }

  private _changeStep(dir: Move) {
    this.setState({ step: this.state.step + dir }, () => {
      this.props.onStep(this.state.step);
    });
  }
}
