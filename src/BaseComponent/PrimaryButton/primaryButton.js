import React from "react";
import {Button} from "antd";
import './primaryButton.css';

const PrimaryButton = (props) => {
    return(
        <Button size='large' htmlType={props.htmlType} className={props.className} onClick={props.onClick} type={props.type} >
            {props.children}
        </Button>
    )
}

export default PrimaryButton;