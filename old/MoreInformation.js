import React from "react";
import { Tabs } from 'antd';

import './MoreInformation.css';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key)
}

const MoreInformation = () => (
    <Tabs defaultActiveKey = '1' onChange = {callback}>
        <TabPane tab = 'Tab 1' key = '1' >
            Tab one
        </TabPane>
        <TabPane tab = 'Tab 2' key = '2'>
            Tab two
        </TabPane>
    </Tabs>
)

export default MoreInformation;