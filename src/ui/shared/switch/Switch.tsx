import * as React from 'react';
import './Switch.css';

import autobind from 'autobind-decorator';

interface SwitchProps {
  className?: string;
  labels?: { left: string; right: string; };
  onChange: (on: boolean) => void;
}

interface SwitchState {
  on: boolean;
}

export class Switch extends React.Component<SwitchProps, SwitchState> {
  constructor(props: SwitchProps) {
    super(props);
    this.state = {
      on: false
    };
  }

  @autobind
  toggle() {
    this.setState({ on: !this.state.on }, () => {
      this.props.onChange(this.state.on);
    });
  }

  render() {
    const { labels } = this.props;
    return (
      <div
        className={
          'grip-switch' +
          (labels ? ' labels' : '') +
          (this.props.className ? ` ${this.props.className}` : '') +
          (this.state.on ? ' on' : '')
        }
        onClick={this.toggle}
      >
        {labels && labels.left && (
          <span className="l">{labels.left}</span>
        )}
        <div className="switch" />
        {labels && labels.right && (
          <span className="r">{labels.right}</span>
        )}
      </div>
    );
  }
}
