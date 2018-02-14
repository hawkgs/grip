import * as React from 'react';
import './Input.css';

interface InputProps {
  type: 'text' | 'password' | 'number';
  name?: string;
  className?: string;
  placeholder?: string;
  unit?: string;
  onChange: (e: React.InputHTMLAttributes<HTMLInputElement>) => void;
}

export class Input extends React.Component<InputProps> {
  render() {
    return (
      <div className={'input ' + this.props.className}>
        <span>
          <input
            type={this.props.type}
            name={this.props.name}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
            required={true}
          />
          <div className="line" />
        </span>
        {this.props.unit && (
          <span className="unit">{this.props.unit}</span>
        )}
      </div>
    );
  }
}
