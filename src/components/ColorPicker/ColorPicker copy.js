import React, { Component } from 'react';
import './ColorPicker.css';
import { Container, Title } from './ColorPicker.styled';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 3,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['colorPickerOption'];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push('colorPickerOption--active');
    }
    return optionClasses.join(' ');
  };
  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <Container>
        <Title>Color Picker</Title>
        <p>Вибраний колір: {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </Container>
    );
  }
}

export default ColorPicker;
