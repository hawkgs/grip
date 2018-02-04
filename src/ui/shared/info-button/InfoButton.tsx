import * as React from 'react';
import './InfoButton.css';

import autobind from 'autobind-decorator';

interface InfoButtonProps {
  onClick: () => void;
}

interface InfoButtonState {
  clicked: boolean;
}

export class InfoButton extends React.Component<InfoButtonProps, InfoButtonState> {
  constructor(props: InfoButtonProps) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  @autobind
  onTouchStart() {
    this.setState({ clicked: true });
  }

  @autobind
  onTouchEnd() {
    this.setState({ clicked: false });
  }

  render() {
    return (
      <div
        className={'info-button' + (this.state.clicked ? ' clicked' : '')}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
        onClick={this.props.onClick}
      >
        ?
      </div>
    );
  }
}
