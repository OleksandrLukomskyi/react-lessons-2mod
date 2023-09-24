import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className="dropdown">
        <button type="button" className="dropdownToggle" onClick={this.toggle}>
          {this.state.visible ? 'Скрити' : 'Показати'}
        </button>

        {this.state.visible && (
          <div className="dropdownMenu">Випадаюче меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
