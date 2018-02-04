import * as React from 'react';
import './Button.css';

import autobind from 'autobind-decorator';

interface ButtonProps {
  onClick?: (e: any) => void;
  disabled?: boolean;
}

interface ButtonState {
  clicked: boolean;
}

export class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  @autobind
  onTouchStart() {
    if (!this.props.disabled) {
      this.setState({ clicked: true });
    }
  }

  @autobind
  onTouchEnd() {
    if (!this.props.disabled) {
      this.setState({ clicked: false });
    }
  }

  render() {
    return (
      <button
        className={'grip-btn clk' + (this.state.clicked ? ' clicked' : '')}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
      >
        {this.props.children}
      </button>
    );
  }
}
