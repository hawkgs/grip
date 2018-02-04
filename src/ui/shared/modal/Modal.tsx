import * as React from 'react';
import './Modal.css';

import autobind from 'autobind-decorator';

interface ModalProps {
  onToggle: (visible: boolean) => void;
  visible: boolean;
  title?: string;
}

export class Modal extends React.Component<ModalProps, {}> {
  @autobind
  close() {
    this.props.onToggle(false);
  }

  render() {
    if (!this.props.visible) {
      return <div />;
    }

    return (
      <div className="modal">
        <div className="backdrop" />
        <div className="body">
          <div className="close" onClick={this.close}>╳</div>
          <div className="content">
            {this.props.title && (
              <p className="title">{this.props.title}</p>
            )}
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
