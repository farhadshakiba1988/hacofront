// -----------------------------
// here we are implementing jobOfferAddButton component
// we user Drawer component from ant design
// -----------------------------

import React from "react";
import {Translation} from "react-i18next";
import "./ResumeArchiveAddButton.css";
//import JobOfferForm from "../Resume/ResumeArchive/ResumeArchiveform";
import PrimaryButton from "../../../../BaseComponent/PrimaryButton/primaryButton";
import { Button, Card, Col, Row, Input, Drawer, Tabs, Form, Select, Divider } from "antd";
import { CloseOutlined } from '@ant-design/icons';
import ResumeArchiveform from "./../Resume/ResumeArchive/ResumeArchiveForm/Form";
import GroupResumeArchiveform from "./../Resume/GroupResumeArchive/GroupResumeArchiveForm/Form";
import AddResume from "../../../../Icons/images/addResume.svg";
import AddPerson from "../../../../Icons/images/addPerson.svg";

const { TabPane } = Tabs;
class ResumeArchiveAddButton extends React.Component {
    state = {visibleAddPerson: false,visibleAddResume:false, placement: "left"};

    showDrawerAddPerson = () => {
        this.setState({
            visibleAddPerson:true,
            visibleAddResume:false,
        });
    };
    showDrawerAddResume = () => {
        this.setState({
            visibleAddPerson:false,
            visibleAddResume:true,
        });
    };
    onCloseAddPerson = () => {
        this.setState({
            visibleAddPerson: false,
        });
    };
    onCloseAddResume = () => {
        this.setState({
            visibleAddResume: false,
        });
    }
    onChange = (e) => {
        this.setState({
            placement: e.target.value,
        });
    };
    render() {
        const {placement, visible} = this.state;
        const fullWidth = global.window.innerWidth > 600 ? ('675px') : ('100%');
        return (
            <>
                <Col xl={{span:12}} lg={{span:12}} sm={{span:24}} md={{span:12}} xs={{span:24}} >
                    <PrimaryButton className='border border-red-400 rounded-lg md:mt-2 sm:mt-2 lg:ml-4 xl:ml-4 sm:ml-1 sm:mb-2 xl:mr-2 lg:mr-2 md:mr-3 text-white bg-red-400 ' onClick={this.showDrawerAddPerson} type="default" danger>
                        <Translation>
                            {(t) => {
                                return t("job-request.6");
                            }}
                        </Translation> <img src={AddPerson} alt='AddPerson'/>
                    </PrimaryButton>
                    <PrimaryButton className='border border-red-400 rounded-lg md:mt-2 sm:mt-2  sm:ml-1 xl:mr-1  lg:mr-1 md:mr-3 sm:mr-3 text-red-400   ' onClick={this.showDrawerAddResume} type="default" danger>
                        <Translation>
                            {(t) => {
                                return t("job-request.5");
                            }}
                        </Translation> <img src={AddResume} alt='AddResume'/>
                    </PrimaryButton>
                </Col>
                <Drawer
                    placement={placement}
                    closable={true}
                    onClose={this.onCloseAddPerson}
                    visible={this.state.visibleAddPerson}
                    mask={true}
                    keyboard={true}
                    //width={fullWidth}
                    className='width'
                    title={<Translation>
                        {(t) => {
                            return t("job-request.3");
                        }}
                    </Translation>}
                    //title="افزودن متقاضی "
                    //headerStyle={{
                //backgroundImage: "linear-gradient(to left, #f87171 10%, #d5648d 30%,#a36198 82%, #6d5e91)"
                    // }}
                >
                 <ResumeArchiveform />
                </Drawer>
                <Drawer
                    placement={placement}
                    closable={true}
                    onClose={this.onCloseAddResume}
                    visible={this.state.visibleAddResume}
                    mask={true}
                    keyboard={true}
                    //width={fullWidth}
                    className='width'
                    title={<Translation>
                        {(t) => {
                            return t("job-request.3");
                        }}
                    </Translation>}
                    //title="افزودن  گروهی رزومه "
                    //headerStyle={{
                    //backgroundImage: "linear-gradient(to left, #f87171 10%, #d5648d 30%,#a36198 82%, #6d5e91)"
                    // }}
                >
                    <GroupResumeArchiveform />
                </Drawer>
            </>
        );
    }
}

export default ResumeArchiveAddButton;
