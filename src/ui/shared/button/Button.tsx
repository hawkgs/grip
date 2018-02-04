import * as React from 'react';
import './Button.css';

import autobind from 'autobind-decorator';

interface ButtonProps {
  onClick?: (e: any) => void;
  children?: any;
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
  onMouseDown() {
    this.setState({ clicked: true });
  }

  @autobind
  onMouseUpOrLeave() {
    this.setState({ clicked: false });
  }

  render() {
    return (
      <button
        className={'grip-btn' + (this.state.clicked ? ' clicked' : '')}
        onClick={this.props.onClick}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUpOrLeave}
        onMouseLeave={this.onMouseUpOrLeave}
      >
        {this.props.children}
      </button>
    );
  }
}
