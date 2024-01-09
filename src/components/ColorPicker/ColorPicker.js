import { useState } from 'react';
import './ColorPicker.css';
import { Container, Title } from './ColorPicker.styled';

const ColorPicker = ({ options }) => {
  const [activeOptionIndex, setActiveOptionIndex] = useState(3);

  const setActiveIdx = index => {
    setActiveOptionIndex(index);
  };

  const makeOptionClassName = index => {
    const optionClasses = ['colorPickerOption'];
    if (index === activeOptionIndex) {
      optionClasses.push('colorPickerOption--active');
    }
    return optionClasses.join(' ');
  };

  const { label } = options[activeOptionIndex];

  return (
    <Container>
      <Title>Color Picker</Title>
      <p>Вибраний колір: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveIdx(index)}
          ></button>
        ))}
      </div>
    </Container>
  );
};

export default ColorPicker;
