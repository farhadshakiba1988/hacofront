import React from "react";
import { Card, Radio } from "antd";
import './Radio.css';
const RadioGroup = Radio.Group;

class HorizontalRadio extends React.Component {
  state = {
    value: 1,
  };
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio value={1} className="borderbutton pr-1 pt-1 mr-1 ml-1 ">آقا</Radio>
        <Radio value={2} className="borderbutton pr-1 pt-1 mr-2 ml-1 ">خانم</Radio>
      </RadioGroup>
    );
  }
}
export default HorizontalRadio;
