import React from "react";
import { Card, Select } from "antd";
import "./SelectMultiple.css";
const Option = Select.Option;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
function handleChange(value) {
  console.log(`selected ${value}`);
}
class SelectMultiple extends React.Component {
  state = {
    size: 'default',
  };
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };
  render() {
    const { size } = this.state;
    return (
      <Select className='SelectMultiple' size={size} mode="tags" placeholder="لطفا انتخاب کنید"
        defaultValue={['a10', 'c12']} onChange={handleChange} tokenSeparators={[',']}>
        {children}
      </Select>
    );
  };
}
export default SelectMultiple;
