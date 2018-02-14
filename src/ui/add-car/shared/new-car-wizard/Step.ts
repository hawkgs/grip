import * as React from 'react';

interface StepProps {
  title: string | any;
  disablePrev?: boolean;
  disableNext?: boolean;
  children?: any;
}

export class Step extends React.Component<StepProps, {}> {
  render() {
    return this.props.children;
  }
}
