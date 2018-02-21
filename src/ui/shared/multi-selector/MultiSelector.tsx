import * as React from 'react';
import './MultiSelector.css';

import { Option } from './Option';

interface MultiSelectorProps {
  default?: string | number;
  className?: string;
  onSelect: (option: string | number) => void;
  children?: any;
}

interface MultiSelectorState {
  selected: string | number;
}

export class MultiSelector extends React.Component<MultiSelectorProps, MultiSelectorState> {
  constructor(props: MultiSelectorProps) {
    super(props);

    const selected = props.default && (props.children || []).find(c => c.props.value === props.default)
      ? props.default
      : '';

    this.state = { selected };
  }

  get children(): Option[] {
    const { children } = this.props;
    if (children) {
      if (!(children instanceof Array)) {
        return [children];
      }
      return children;
    }
    return [];
  }

  onOptionSelect(selected: string | number) {
    this.setState({ selected }, () => {
      this.props.onSelect(selected);
    });
  }

  render() {
    return (
      <div className={'grip-multi-selector ' + this.props.className}>
        <ul>
          {this.children.map((c: Option, i: number) =>
            <li
              onClick={() => this.onOptionSelect(c.props.value)}
              key={`${c.props.value}-${i}`}
              className={this.state.selected === c.props.value ? 'selected' : ''}
            >
              <span>{c.props.children}</span>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
