import React from "react";
import { Tabs } from 'antd';

import './MoreInformation.css';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key)
}
































const MoreInformation = () => (
    <Tabs defaultActiveKey = '1' onChange = {callback} centered>
        <TabPane tab = 'جزییات ' key = '1' >
            Tab one
        </TabPane>
        <TabPane tab = 'وضعیت درخواست' key = '2'>
            Tab two
        </TabPane>
    </Tabs>
)

export default MoreInformation;