import React from 'react'
import MyDrawer from '../../../BaseComponent/Drawer/Drawer';
const Dashboard = (props) => {
  return (
    <div>
        <h1 style={{ fontFamily: 'English' }}>Dashboard Component Page</h1>
        <MyDrawer placement = "left" closable = {true} header = 'bye' text='dashboard'><h1>salam</h1></MyDrawer>
    </div>
  )
}

export default Dashboard
