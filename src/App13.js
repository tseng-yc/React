import { render } from '@testing-library/react';
//BMI線上計算應用-類別型元件
import React, { useState } from 'react';

class BMIClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      weight: '',
      bmi: '',
    };
  }
  calcBMI = (h, w) =>
    w > 0 && h > 0 ? (w / Math.pow(h / 100, 2)).toFixed(2) : 0;

  // handleInput = (e) => {
  //   this.setState({ height: e.target.value });
  // };
  handleInput = (e) => {
    this.setState({ weight: e.target.value });
  };

  render() {
    return (
      <>
        請輸入你的身高(cm)：
        <br />
        <input
          type="text"
          value={this.state.height}
          // onChange={this.handleInput}
          onChange={(e)=>this.setState({ height: e.target.value })}
        />
        <br />
        請輸入你的體重(kg)：
        <br />
        <input
          type="text"
          value={this.state.weight}
          onChange={this.handleInput}
        />
        <br />
        <button
          onClick={() =>
            this.setState({
              bmi: this.calcBMI(+this.state.height, +this.state.weight),
            })
          }
        >
          計算
        </button>
        <br />
        您的BMI值為 : {this.state.bmi}
      </>
    );
  }
}

export default BMIClass;
